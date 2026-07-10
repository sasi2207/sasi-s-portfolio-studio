<?php
// ===============================
// CORS HEADERS
// ===============================
$allowedOrigins = [
  "https://techsasi.com",
  "https://www.techsasi.com"
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
  header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");



if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Preflight handled by Apache (.htaccess)
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

// ===============================
// READ JSON INPUT
// ===============================
$data = json_decode(file_get_contents("php://input"), true);

$name        = trim($data["name"] ?? "");
$phone       = trim($data["phone"] ?? "");
$email       = trim($data["email"] ?? "");
$websiteType = trim($data["websiteType"] ?? "");
$promo       = trim($data["promoCode"] ?? "");

// ===============================
// VALIDATION
// ===============================
if ($name == "" || $phone == "" || $email == "" || $websiteType == "" || $promo == "") {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid Email"]);
    exit();
}

if ($promo !== "techsasi2026") {
    echo json_encode(["status" => "error", "message" => "Invalid Promo Code"]);
    exit();
}

// ===============================
// INSERT INTO DB
// ===============================
$stmt = $conn->prepare("
    INSERT INTO offer_registrations(name, phone, email, website_type, promo_code)
    VALUES (?, ?, ?, ?, ?)
");

$stmt->bind_param("sssss", $name, $phone, $email, $websiteType, $promo);

if ($stmt->execute()) {
    echo json_encode([
        "status" => "success",
        "message" => "🎉 Registered Successfully! Our Team Will Contact You."
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Failed to Register"
    ]);
}

$conn->close();
?>
