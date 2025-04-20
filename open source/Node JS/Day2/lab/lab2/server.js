// Import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const logger = require('./logger');
const { validateNote } = require('./validation');

// Constants
const PORT = process.env.PORT || 3001;
const PUBLIC_DIR = path.join(__dirname, 'public');
const NOTES_FILE = path.join(__dirname, 'notes.json');

// Helper functions
function readNotes(callback) {
    fs.readFile(NOTES_FILE, 'utf8', (err, data) => {
        if (err) {
            console.log(err.code)
            if (err.code === 'ENOENT') {
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
    fs.writeFile(NOTES_FILE, JSON.stringify(notes, null, 2), 'utf8', callback);
}

// Function to serve static files like HTML, CSS, JS and json
function serveStaticFile(filePath, res) {
    const extname = path.extname(filePath);  // Get the file extension (after the last dot)
    console.log(extname);
    // Set the content type based on the file extension (make the default to html because we are serving index.html)
    let contentType = 'text/html';

    switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'application/json'; break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {  // error no entry (file not found)
                res.writeHead(404);
                res.statusCode = 404;
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.statusCode = 500;  // Internal server error
                res.end('Server error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.statusCode = 200;
            res.end(content, 'utf-8');
        }
    });
}

// Create the HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method.toUpperCase();
    logger.logToFile(req, res);


    console.log(`${method} ${pathname}`);

    // Serve static files like CSS, JS
    if (pathname.startsWith('/public/')) {
        const filePath = path.join(PUBLIC_DIR, pathname.replace('/public', ''));
        serveStaticFile(filePath, res);
        return;
    }

    // Serve index.html at root
    if (pathname === '/') {
        serveStaticFile(path.join(PUBLIC_DIR, 'index.html'), res);
        return;
    }

    // API routes
    if (pathname.startsWith('/api/notes')) {
        // GET all notes
        if (pathname === '/api/notes' && method === 'GET') {
            readNotes((err, notes) => {
                if (err) {
                    console.log(err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.statusCode = 500;
                    return res.end(JSON.stringify({ error: 'Internal server error' }));
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.statusCode = 200;
                res.end(JSON.stringify(notes));
            });
            return;
        }

        // POST a new note
        if (pathname === '/api/notes' && method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // Convert Buffer to string
            });
            req.on('end', () => {
                try {
                    const newNote = JSON.parse(body);

                    // Validate the note
                    const validation = validateNote(newNote);
                    if (!validation.isValid) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.statusCode = 400;
                        return res.end(JSON.stringify({
                            error: 'Validation failed',
                            details: validation.errors
                        }));
                    }

                    readNotes((err, notes) => {
                        if (err) {
                            console.log(err);
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            res.statusCode = 500;
                            return res.end(JSON.stringify({ error: 'Internal server error' }));
                        }
                        newNote.id = Date.now(); // make a unique ID based on timestamp like mongoDB
                        notes.push(newNote);
                        writeNotes(notes, (err) => {
                            if (err) {
                                console.log(err);
                                res.writeHead(500, { 'Content-Type': 'application/json' });
                                res.statusCode = 500;
                                return res.end(JSON.stringify({ error: 'Internal server error' }));
                            }
                            res.writeHead(201, { 'Content-Type': 'application/json' });
                            res.statusCode = 201;
                            res.end(JSON.stringify(newNote));
                        });
                    });
                } catch (parseErr) {
                    console.log(parseErr);
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.statusCode = 400;
                    res.end(JSON.stringify({ error: 'Bad request' }));
                }
            });
            return;
        }


        // GET a specific note by id 
        // Note: This should be the last route to be checked because it is a dynamic route
        // and it will match any other route that starts with /api/notes/ (like /api/notes/123)
        // So it should be checked after the static route for /api/notes
        if (pathname.match(/\/api\/notes\/\d+/) && method === 'GET') {
            const id = pathname.split('/')[3];
            readNotes((err, notes) => {
                if (err) {
                    console.log(err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.statusCode = 500;
                    return res.end(JSON.stringify({ error: 'Internal server error' }));
                }
                const note = notes.find(n => n.id == id);
                if (!note) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.statusCode = 404;
                    return res.end(JSON.stringify({ error: 'Note not found' }));
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.statusCode = 200;
                res.end(JSON.stringify(note));
            });
            return;
        }

        // PUT (update) a note by id
        if (pathname.match(/\/api\/notes\/\d+/) && method === 'PUT') {
            const id = pathname.split('/')[3];
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // Convert Buffer to string
            });
            req.on('end', () => {
                try {
                    const updatedNote = JSON.parse(body);

                    // Validate the note
                    const validation = validateNote(updatedNote);
                    if (!validation.isValid) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.statusCode = 400;
                        return res.end(JSON.stringify({
                            error: 'Validation failed',
                            details: validation.errors
                        }));
                    }

                    readNotes((err, notes) => {
                        if (err) {
                            console.log(err);
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            res.statusCode = 500;
                            return res.end(JSON.stringify({ error: 'Internal server error' }));
                        }
                        const index = notes.findIndex(n => n.id == id);
                        if (index === -1) {
                            res.writeHead(404, { 'Content-Type': 'application/json' });
                            res.statusCode = 404;
                            return res.end(JSON.stringify({ error: 'Note not found' }));
                        }
                        notes[index] = { ...notes[index], ...updatedNote };
                        writeNotes(notes, (err) => {
                            if (err) {
                                console.log(err);
                                res.writeHead(500, { 'Content-Type': 'application/json' });
                                res.statusCode = 500;
                                return res.end(JSON.stringify({ error: 'Internal server error' }));
                            }
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.statusCode = 200;
                            res.end(JSON.stringify(notes[index]));
                        });
                    });
                } catch (parseErr) {
                    console.log(parseErr);
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.statusCode = 400;
                    res.end(JSON.stringify({ error: 'Bad request' }));
                }
            });
            return;
        }

        // DELETE a note by id
        if (pathname.match(/\/api\/notes\/\d+/) && method === 'DELETE') {
            const id = pathname.split('/')[3];
            readNotes((err, notes) => {
                if (err) {
                    console.log(err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.statusCode = 500;
                    return res.end(JSON.stringify({ error: 'Internal server error' }));
                }
                const index = notes.findIndex(n => n.id == id);
                if (index === -1) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.statusCode = 404;
                    return res.end(JSON.stringify({ error: 'Note not found' }));
                }
                notes.splice(index, 1);
                writeNotes(notes, (err) => {
                    if (err) {
                        console.log(err);
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.statusCode = 500;
                        return res.end(JSON.stringify({ error: 'Internal server error' }));
                    }
                    res.writeHead(204); // No content
                    res.statusCode = 204;
                    res.end();
                });
            });
            return;
        }

    }

    // Default response for unhandled routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.statusCode = 404;
    res.end('404 Not Found');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});