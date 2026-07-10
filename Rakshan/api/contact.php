<?php
header("Content-Type: application/json");


// Preflight
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit();
}

require "../config/db.php";

$data = json_decode(file_get_contents("php://input"), true);

$name    = trim($data["name"] ?? "");
$phone   = trim($data["phone"] ?? "");
$subject = trim($data["subject"] ?? "");
$message = trim($data["message"] ?? "");

if (!$name || !$phone || !$subject || !$message) {
    http_response_code(422);
    echo json_encode(["error" => "All fields are required"]);
    exit();
}

// Simple phone validation
if (!preg_match('/^[0-9]{10,15}$/', $phone)) {
    http_response_code(422);
    echo json_encode(["error" => "Invalid phone number"]);
    exit();
}

try {
    $stmt = $pdo->prepare(
        "INSERT INTO contact_messages (name, phone, subject, message)
         VALUES (?, ?, ?, ?)"
    );

    $stmt->execute([$name, $phone, $subject, $message]);

    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Server error"]);
}
