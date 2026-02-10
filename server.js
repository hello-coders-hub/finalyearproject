const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to SQLite database (it creates a file called farmfresh.db in the backend folder)
const db = new sqlite3.Database('./farmfresh.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create tables (like setting up shelves in the box)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    farmerId INTEGER,
    name TEXT,
    pesticides TEXT,
    yieldSize TEXT,
    amount INTEGER,
    auctionDate TEXT,
    bids TEXT DEFAULT '[]'
  )`);

  // Add more tables later if needed, like auctions or ratings
});

// Routes
app.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.run(`INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`, [name, email, hashedPassword, role], function(err) {
    if (err) {
      res.status(500).send('Error registering: ' + err.message);
    } else {
      res.send('User registered!');
    }
  });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (err) {
      res.status(500).send('Error: ' + err.message);
    } else if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id }, 'secretkey');
      res.json({ token, user });
    } else {
      res.status(400).send('Wrong login!');
    }
  });
});

app.post('/add-product', (req, res) => {
  const { farmerId, name, pesticides, yieldSize, amount, auctionDate } = req.body;
  db.run(`INSERT INTO products (farmerId, name, pesticides, yieldSize, amount, auctionDate) VALUES (?, ?, ?, ?, ?, ?)`, [farmerId, name, pesticides, yieldSize, amount, auctionDate], function(err) {
    if (err) {
      res.status(500).send('Error adding product: ' + err.message);
    } else {
      res.send('Product added!');
    }
  });
});

app.get('/products', (req, res) => {
  db.all(`SELECT * FROM products`, [], (err, rows) => {
    if (err) {
      res.status(500).send('Error: ' + err.message);
    } else {
      res.json(rows);
    }
  });
});

// Add more routes later, like for bids or payments...

// Simple mediator dashboard (for now, just a message)
app.get('/mediator', (req, res) => {
  res.send('Welcome to Mediator Dashboard! 🚚 You handle transport.');
});

app.listen(5000, () => console.log('Backend running on port 5000'));