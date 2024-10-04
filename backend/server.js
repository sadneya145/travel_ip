const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

// Constants
const PORT = 5000;
const JWT_SECRET = 'loginme'; // Change this to a secure secret in production

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://sadneyasam05:root@cluster0.mzwgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
});

const User = mongoose.model('User', userSchema);

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sadneyasam05@gmail.com', // Replace with your email
    pass: 'qqjq hwfv ingo wdkk', // Replace with your email password or app-specific password
  }
});

// Registration Route
app.post('/api/users/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
    });

    await newUser.save();

    // Send verification email
    const verificationLink = `http://localhost:5000/api/users/verify/${verificationToken}`;
    await transporter.sendMail({
      from: 'sadneyasam05@gmail.com',
      to: email,
      subject: 'Email Verification',
      html: `<p>Please click <a href="${verificationLink}">here</a> to verify your email.</p>`,
    });

    res.status(201).json({ message: 'Registration successful. Please check your email for verification.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});

// Email Verification Route
app.get('/api/users/verify/:token', async (req, res) => {
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { email } = decoded;

    const user = await User.findOne({ email, verificationToken: token });
    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired verification token' });
    }

    user.isVerified = true;
    user.verificationToken = null;
    await user.save();

    res.sendFile(path.join(__dirname, 'public', 'verification-success.html'));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Email verification failed' });
  }
});

// Login Route
app.post('/api/users/login', async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
      const user = await User.findOne({ email });
      if (!user || !user.isVerified) {
          return res.status(401).json({ error: 'Invalid credentials or email not verified' });
      }

      const isMatch = await bcrypt.compare(password, user.password); // Compare plain password with hashed password
      if (!isMatch) {
          return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

// Serve static files for verification success page
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
