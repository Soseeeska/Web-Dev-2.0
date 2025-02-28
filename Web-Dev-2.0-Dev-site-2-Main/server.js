// Import modules
const express = require('express'); 
const app = express();
const helmet = require('helmet');
// Use helmet for security
app.use(helmet());
const bodyParser = require('body-parser'); // Import body-parser 
const nodemailer = require('nodemailer'); // Import nodemailer for sending emails
const path = require('path'); // Import path for handling file paths
// Initialize the Express application

app.use(
  helmet.contentSecurityPolicy({
      directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://cdn.jsdelivr.net'],
          scriptSrcAttr: ["'self'", "'unsafe-inline'"],
          scriptSrcElem: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com'],
          imgSrc: ["'self'", 'data:'],
          connectSrc: ["'self'"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: []
      }
  })
);


const port = 3000; // Define the port number
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

// Define the route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html.html')); // Send the HTML file as the response
});
// Define the route for handling POST requests to "/send-email"
app.post("/send-email", (req, res) => {
  console.log('Received POST request to /send-email');
  // Extract email and message from the request body
  const userEmail = req.body.email;
  const userMessage = req.body.message;
  // Create a nodemailer transporter using Gmail service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
       //change email on yours to check email contact form, the pass you may get from Two-step authentication page -> application passwords. in google account
      user: 'mishaporchirian@gmail.com', // Your Gmail address
      pass: 'glkb zsig xjbc ecve' // Your Gmail app-specific password
    }
  });

  // Define email options
  const mailOptions = {
    from: userEmail, // Sender's email address
    to: 'mishaporchirian@gmail.com', // Recipient's email address
    subject: 'Contact Request', // Subject of the email
    text: userMessage // Body of the email
  };

  // Send the email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Error sending email.'); 
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email successfully sent.'); // Send a success message if the email is sent
    }
  });
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log a message when the server starts
});




const mysql = require('mysql'); // or const mysql = require('mysql2');

// Database connection parameters
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Change this to your MySQL password
    database: 'mydb'
});

// Establish MySQL connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});


// Define a GET route to fetch testimonials
app.get("/testimonials", (req, res) => {
    const sql = 'SELECT * FROM testimonials';
    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query: ' + error.stack);
            res.status(500).json({ error: 'Error fetching testimonials' });
            return;
        }

        res.json(results); // Send the fetched testimonials as JSON
    });
});



// Handle project request submissions
app.post('/submit-request', (req, res) => {
    const { requestType, comment } = req.body;

    const sql = 'INSERT INTO project_requests (request_type, comment) VALUES (?, ?)';
    connection.query(sql, [requestType, comment], (err, result) => {
        if (err) {
            console.error('Error inserting request into database: ' + err.stack);
            return res.status(500).send('Error inserting request into database');
        }
        res.status(200).send('Request submitted successfully');
    });
});

// Get the count of project requests
app.get('/request-count', (req, res) => {
    const sql = 'SELECT COUNT(*) AS count FROM project_requests';
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching request count from database: ' + err.stack);
            return res.status(500).send('Error fetching request count from database');
        }
        res.status(200).json(result[0]);
    });
});

