<?php
// Top level headers to protect database initialization failures
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$host = "65.108.76.42";
$db   = "techsasi_rakshan";
$user = "techsasi_2207";
$pass = "SasiKutty2207@Lovely";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$db;charset=utf8mb4",
        $user,
        $pass,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch (PDOException $e) {
    // Content type allocation inside internal system crash
    header("Content-Type: application/json; charset=UTF-8");
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Remote database infrastructure connection timed out."
    ]);
    exit();
}
?>