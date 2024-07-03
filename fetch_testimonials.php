<?php

$servername = "localhost";
$dbname = "MyFirstDb";
$dbusername = "root";
$dbpassword = "root";

//if error occurs, indicate it 
try{
$pdo = new PDO($dns, $dbusername, $dbpassword);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXECUTION);
}catch(PDOExecution $e){
echo "Connection failed: " . $e->getMessage();
}
// fetching testimonials
$sql = "SELECT name, content, date FROM testimonials";
$result = $conn->query($sql);

$testimonials = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $testimonials[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($testimonials);