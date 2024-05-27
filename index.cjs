const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URI and Database name
const mongoURI = 'mongodb+srv://mangesh8736:23605861@hotel.wpqiybc.mongodb.net/';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error(error));

// Define User model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Define FormResponse model
const formResponseSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  aadharNo: String,
  longitude: Number,
  latitude: Number,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  postalCode: String
});
const FormResponse = mongoose.model('FormResponse', formResponseSchema);

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Routes
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Retrieve user from the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Authentication successful
    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/submit-form', async (req, res) => {
  const formData = req.body;

  try {
    // Create and save form response
    const newFormResponse = new FormResponse(formData);
    await newFormResponse.save();

    console.log('Form data inserted successfully');
    res.status(200).send('Form data submitted successfully');
  } catch (error) {
    console.error('Error inserting form data:', error);
    res.status(500).send('Error submitting form data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
