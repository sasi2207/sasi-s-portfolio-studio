<?php
// 1. Dynamic CORS handling
$allowed_origins = [
    "http://localhost:8080",
    "http://localhost:5173",
    "https://techsasi.com" ,// Replace with your production domain if necessary
     "https://www.techsasi.com"
];


$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $origin);
} else {
    header("Access-Control-Allow-Origin: " . ($origin ? $origin : "*"));
}

header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    exit();
}

// Database configuration
$host = "65.108.76.42";
$db_name = "techsasi_rakshan";
$username = "techsasi_2207";
$password = "SasiKutty2207@Lovely";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    // Fetch all enquiries ordered by newest first
    $stmt = $pdo->query("SELECT id, full_name, mobile, email, course, message, created_at FROM course_enquiries ORDER BY created_at DESC");
    $enquiries = $stmt->fetchAll();

    echo json_encode([
        "success" => true,
        "count" => count($enquiries),
        "data" => $enquiries
    ]);

} catch (PDOException $e) {
    error_log("Database Error: " . $e->getMessage());
    echo json_encode(["success" => false, "message" => "Database connection error."]);
}
?>
