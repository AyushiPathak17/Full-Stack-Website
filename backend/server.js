
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // for sending emails
const mongoose = require('mongoose');
const cors = require('cors'); 

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// CORS middleware setup
app.use(cors());

// Connect to MongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose schema for user data
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

// Create a mongoose model based on the schema
const User = mongoose.model('User', userSchema);

// Define a route to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, username, email, password } = req.body;

    // Create a new user document
    const newUser = new User({ name, username, email, password });

    // Save the user to the database
    await newUser.save();
    console.log('User data saved:', newUser);

    // Send a thank you email
    sendEmail(name, email);

    // Send a response back to the frontend
    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server (replace 5000 with your desired port number)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Function to send a thank you email
const sendEmail = (name, email) => {
  // Create a nodemailer transporter (configure with your email service)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'example@gmail.com',
      pass: 'your_email_password',
    },
  });

  // Define email content
  let mailOptions = {
    from: 'example@gmail.com',
    to: email,
    subject: 'Thank You for Signing Up',
    text: `Dear ${name},\n\nThank you for signing up with us!\n\nBest regards,\nBrittle`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
