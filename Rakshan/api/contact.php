<?php
// 1. TOP-LEVEL CORS HEADERS (Ellathukum munnadi idhu thaan irukkanum)
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// 2. SUPPRESS HTML ERROR LEAKS (HTML response pogaama thadukka)
error_reporting(0);
ini_set('display_errors', 0);

// Preflight handler
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit();
}

// 3. SAFE REQUIRE PATH (File path check panni require panrom, crash aagame irukka)
$dbPath = "../config/db.php";
if (!file_exists($dbPath)) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database configuration file missing on server environment."]);
    exit();
}
require $dbPath;

// Read JSON Input payload
$data = json_decode(file_get_contents("php://input"), true);

$name    = trim($data["name"] ?? "");
$phone   = trim($data["phone"] ?? "");
$subject = trim($data["subject"] ?? "");
$message = trim($data["message"] ?? "");

// 4. FRONTEND COMPATIBLE KEY STRUCTURE ("success" => false tracking)
if (!$name || !$phone || !$subject || !$message) {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit();
}

if (!preg_match('/^[0-9]{10,15}$/', $phone)) {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => "Invalid phone number configuration"]);
    exit();
}

try {
    // Unga database context-la $pdo definition check
    if (!isset($pdo)) {
        throw new Exception("Database PDO driver instance not found inside loaded configs.");
    }

    $stmt = $pdo->prepare(
        "INSERT INTO contact_messages (name, phone, subject, message)
         VALUES (?, ?, ?, ?)"
    );

    $stmt->execute([$name, $phone, $subject, $message]);

    echo json_encode(["success" => true, "message" => "Transmission complete"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database execution runtime error occurred"]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database engine query tracking breakdown"]);
}
exit();
?>