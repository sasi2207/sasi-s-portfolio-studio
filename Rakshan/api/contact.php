<?php
// ===============================
// CORS Configuration
// ===============================

$allowedOrigins = [
    "https://techsasi.com",
    "https://www.techsasi.com"
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// Handle Preflight Request
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

// Allow POST Only
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "error" => "Method Not Allowed"
    ]);
    exit();
}

// ===============================
// Database Connection
// ===============================
require "../config/db.php";

// ===============================
// Read JSON Input
// ===============================
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "error" => "Invalid JSON"
    ]);
    exit();
}

// ===============================
// Sanitize Inputs
// ===============================
$name = trim($data["name"] ?? "");
$phone = trim($data["phone"] ?? "");
$subject = trim($data["subject"] ?? "");
$message = trim($data["message"] ?? "");

// ===============================
// Validation
// ===============================
if (empty($name) || empty($phone) || empty($subject) || empty($message)) {
    http_response_code(422);
    echo json_encode([
        "success" => false,
        "error" => "All fields are required."
    ]);
    exit();
}

if (!preg_match('/^[0-9]{10,15}$/', $phone)) {
    http_response_code(422);
    echo json_encode([
        "success" => false,
        "error" => "Invalid phone number."
    ]);
    exit();
}

// ===============================
// Save to Database
// ===============================
try {

    $stmt = $pdo->prepare("
        INSERT INTO contact_messages
        (
            name,
            phone,
            subject,
            message
        )
        VALUES
        (
            :name,
            :phone,
            :subject,
            :message
        )
    ");

    $stmt->execute([
        ':name' => $name,
        ':phone' => $phone,
        ':subject' => $subject,
        ':message' => $message
    ]);

    http_response_code(201);

    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully."
    ]);

} catch (PDOException $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "error" => "Database Error",
        // Remove this line in production
        "details" => $e->getMessage()
    ]);
}