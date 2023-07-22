<?php
// return json 
require 'connectDb.php';
$sql = "SELECT * FROM `thucung`";
$result = $conn->query($sql);
$data = array();
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if ($result) { 
    while ($row = mysqli_fetch_assoc($result)) $data[] = $row; 
     } 
    echo json_encode($data );  
exit();
?>