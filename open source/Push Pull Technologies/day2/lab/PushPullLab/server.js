const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

let users = []; // Temporary in-memory storage

// Get all users
app.get('/get-users', (req, res) => {
  res.json(users);
});

// Register new user
app.post('/register', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const newUser = { id: Date.now(), name, email };
  users.push(newUser);

  res.status(201).json(newUser);
});

// Search
app.get('/search', (req, res) => {
  const q = req.query.q.toLowerCase();
  const result = users.filter(user =>
    user.name.toLowerCase().includes(q) ||
    user.email.toLowerCase().includes(q)
  );
  res.json(result);
});

// Delete user
app.delete('/delete-user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.json({ message: 'User deleted' });
});


// PUT /edit-user/:id
app.put('/edit-user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index].name = name;
    users[index].email = email;
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
