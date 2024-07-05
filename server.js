const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 3000;



// Serve static files from the project directory
app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html.html'));
});

app.post('/send-email', (req, res) => {
  console.log('Received POST request to /send-email');
  const userEmail = req.body.email;
  const userMessage = req.body.message;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    //change email on yours to check email contact form, the pass you may get from Two-step authentication page -> application passwords. in google account
      user: 'mishaporchirian@gmail.com',
      pass: 'glkb zsig xjbc ecve'
    }
  });

  const mailOptions = {
    from: userEmail,
    to: 'mishaporchirian@gmail.com',
    subject: 'Contact Request',
    text: userMessage
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email successfully sent.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
