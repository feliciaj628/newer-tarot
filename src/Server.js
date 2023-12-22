const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;
const app = express();

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Add this route to serve 'index.html' file for the root path ('/')
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'form.html'));
});
// ... (the rest of your server.js code)

app.use(express.static(__dirname + '/styles'));
app.use(express.static(publicPath));

app.use(express.static(path.join(__dirname, 'app')));
process.chdir('/Users/felicia/Desktop/app');


// Replace with your own MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  const { name, username, email, password } = req.body;

  // TODO: Add server-side validation and password hashing

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email is already in use');
    }
    const newUser = new User({ name, username, email, password });
    await newUser.save();

      res.status(201).send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
});

app.post('/check-email-and-username', async (req, res) => {
  const { email, username } = req.body;
  try {
    const existingUserEmail = await User.findOne({ email });
    const existingUserUsername = await User.findOne({ username });

    if (existingUserEmail || existingUserUsername) {
      res.status(200).json({ emailExists: !!existingUserEmail, usernameExists: !!existingUserUsername });
    } else {
      res.status(200).json({ emailExists: false, usernameExists: false });
    }
  } catch (error) {
    console.error('Error checking email/username:', error);
    res.status(500).send('Error checking email/username');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
