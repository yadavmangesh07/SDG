const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001; // Choose any available port

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', // Change this to your MySQL host
  user: 'root', // Change this to your MySQL username
  password: 'root123', // Change this to your MySQL password
  database: 'SDG', // Change this to your database name
});

app.use(cors());
app.use(express.json()); // Parse JSON requests

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

// Create an API endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  // Assuming form data is sent as JSON
  const formData = req.body;

  // Insert form data into the database
  const sql = 'INSERT INTO FormResponses (name, phoneNumber, email, aadharNo, longitude, latitude, addressLine1, addressLine2, city, state, postalCode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [formData.name, formData.phoneNumber, formData.email, formData.aadharNo, formData.longitude, formData.latitude, formData.addressLine1, formData.addressLine2, formData.city, formData.state, formData.postalCode];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting form data:', err);
      res.status(500).send('Error submitting form data');
    } else {
      console.log('Form data inserted successfully');
      res.status(200).send('Form data submitted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
