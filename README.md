
Install Node.js

// npm install recharts 
// npm install nodemailer 
// npm install express
// npm install body-parser
// npm install chart.js


1. download Xammp to manage database and its content 
To make sure all pathes are correct move project folder with all code to the XAMPP/htdocs.
2. To make database for the site go to http://localhost/phpmyadmin/ , create database 
   
-- Create the database
CREATE DATABASE mydb;

-- Use the database
USE mydb;

-- Create the testimonials table
CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    date DATE,
    image VARCHAR(255)
);

Incert data into Testimonials 

INSERT INTO testimonials (name, content, date, image) VALUES
('John Doe', 'This is an amazing service!', '2024-01-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/1.jpeg'),
('Jane Smith', 'I highly recommend this to everyone.', '2024-02-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/2.jpeg'),
('Alice Johnson', 'A truly outstanding experience.', '2024-03-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/3.jpeg'),
('Bob Brown', 'Professional and efficient service.', '2024-04-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/4.jpeg'),
('Charlie Davis', 'Exceeded my expectations in every way.', '2024-05-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/5.jpeg'),
('Diana Evans', 'Very satisfied with the results.', '2024-06-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/6.jpeg'),
('Frank Green', 'Will definitely use again.', '2024-07-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/7.jpeg'),
('Grace Harris', 'Top-notch quality and support.', '2024-08-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/8.jpeg'),
('Hank Irwin', 'Highly professional and responsive.', '2024-09-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/9.jpeg'),
('Ivy Jones', 'Fantastic service and great value.', '2024-10-01', 'http://localhost/devsitev2.0/public/assets/testimonialsPhoto/10.jpeg');


3. to run web app go to http://localhost/devsitev2.0/html.html in your web browser. 
   




