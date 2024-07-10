const express = require('express');
const app = express();
// Import required packages
const mysql = require('mysql'); // or const mysql = require('mysql2'); for mysql2 package

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


 app.get("/testimonials", (req, res) => {
    const sql = 'SELECT * FROM testimonials';
    connection.query(sql, (error, results, fields) => {
        if (error) 
            console.error('Error executing MySQL query: ' + error.stack);
            return;
        })
})


 