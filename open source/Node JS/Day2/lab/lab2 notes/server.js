// Import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// File paths
const NOTES_FILE = path.join(__dirname, 'notes.json');
const PUBLIC_DIR = path.join(__dirname, 'public');

// Helper functions
function readNotes(callback) {
  fs.readFile(NOTES_FILE, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File doesn't exist, return empty array
        return callback(null, []);
      }
      return callback(err);
    }
    try {
      const notes = JSON.parse(data);
      callback(null, notes);
    } catch (parseErr) {
      callback(parseErr);
    }
  });
}

function writeNotes(notes, callback) {
  fs.writeFile(NOTES_FILE, JSON.stringify(notes, null, 2), callback);
}

function serveStaticFile(filePath, res) {
  const extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  console.log(`${method} ${pathname}`);

  // Serve static files
  if (pathname.startsWith('/public/')) {
    const filePath = path.join(PUBLIC_DIR, pathname.replace('/public', ''));
    serveStaticFile(filePath, res);
    return;
  }

  // Serve index.html at root
  if (pathname === '/') {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    serveStaticFile(indexPath, res);
    return;
  }

  // API routes
  if (pathname.startsWith('/api/notes')) {
    // GET all notes
    if (pathname === '/api/notes' && method === 'GET') {
      readNotes((err, notes) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal server error' }));
          return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(notes));
      });
      return;
    }

    // GET single note
    const noteIdMatch = pathname.match(/^\/api\/notes\/(\d+)$/);
    if (noteIdMatch && method === 'GET') {
      readNotes((err, notes) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal server error' }));
          return;
        }

        const note = notes.find(n => n.id === parseInt(noteIdMatch[1]));
        if (note) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(note));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Note not found' }));
        }
      });
      return;
    }

    // POST new note
    if (pathname === '/api/notes' && method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', () => {
        try {
          const newNote = JSON.parse(body);
          readNotes((err, notes) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Internal server error' }));
              return;
            }

            // Generate ID
            newNote.id = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1;
            notes.push(newNote);

            writeNotes(notes, (err) => {
              if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal server error' }));
                return;
              }

              res.writeHead(201, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(newNote));
            });
          });
        } catch (parseErr) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }

    // PUT update note
    if (noteIdMatch && method === 'PUT') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', () => {
        try {
          const updatedNote = JSON.parse(body);
          readNotes((err, notes) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Internal server error' }));
              return;
            }

            const index = notes.findIndex(n => n.id === parseInt(noteIdMatch[1]));
            if (index === -1) {
              res.writeHead(404, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Note not found' }));
              return;
            }

            notes[index] = { ...notes[index], ...updatedNote };

            writeNotes(notes, (err) => {
              if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal server error' }));
                return;
              }

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(notes[index]));
            });
          });
        } catch (parseErr) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }

    // DELETE note
    if (noteIdMatch && method === 'DELETE') {
      readNotes((err, notes) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal server error' }));
          return;
        }

        const index = notes.findIndex(n => n.id === parseInt(noteIdMatch[1]));
        if (index === -1) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Note not found' }));
          return;
        }

        const deletedNote = notes.splice(index, 1)[0];

        writeNotes(notes, (err) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
            return;
          }

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(deletedNote));
        });
      });
      return;
    }
  }

  // Default response for unhandled routes
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  
  // Initialize notes.json if it doesn't exist
  fs.access(NOTES_FILE, fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile(NOTES_FILE, '[]', (writeErr) => {
        if (writeErr) {
          console.error('Error creating notes.json:', writeErr);
        } else {
          console.log('Created notes.json with empty array');
        }
      });
    }
  });
});