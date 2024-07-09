<?php
// Error reporting section 
ini_set('display_errors', 1); // Display errors on the page
ini_set('display_startup_errors', 1); // Display startup errors on the page
error_reporting(E_ALL); // Report all types of errors
// Set the content type to JSON
header('Content-Type: application/json');
// Database connection parameters(need to be fiiled as for your database)
$servername = "localhost"; // Server name
$username = "root"; // Database username
$password = "root"; // Database password (change to your actual password, leave empty if you dont have password)
$dbname = "mydb"; // Database name
// Create a new MySQL connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check the connection 
if ($conn->connect_error) {
    // If connection fails, return an error message 
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}
// SQL query to fetch testimonials table 
$sql = "SELECT id, content, name, date, image FROM testimonials";
// Execute the query
$result = $conn->query($sql);
// Make an array to store testimonials data
$testimonials = array();
if ($result->num_rows > 0) {
    // If there are data, fetch each row and add it to the testimonials array
    while ($row = $result->fetch_assoc()) {
        $testimonials[] = $row;
    }
} else {
    // If no results, return an error message in JSON format and exit
    echo json_encode(['error' => '0 results']);
    exit;
}
// Close the database connection
$conn->close();
// Return the testimonials array in JSON format
echo json_encode($testimonials);
?>