<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "root"; // Change to your actual database password
$dbname = "mydb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// Fetch testimonials
$sql = "SELECT id, content, name, date, image FROM testimonials";
$result = $conn->query($sql);

$testimonials = array();
if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        $testimonials[] = $row;
    }
} else {
    echo json_encode(['error' => '0 results']);
    exit;
}

$conn->close();

echo json_encode($testimonials);
?>

