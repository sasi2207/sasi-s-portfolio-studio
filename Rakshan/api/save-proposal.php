<?php
// ===================================
// CORS HEADERS (MUST BE FIRST)
// ===================================

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




// ===================================
// HANDLE PREFLIGHT REQUEST
// ===================================
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ===================================
// LOAD CONFIG
// ===================================
require_once __DIR__ . "/../config/db.php";
$config = require __DIR__ . "/../config/mail.php";

// ===================================
// READ JSON INPUT
// ===================================
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON payload"]);
    exit;
}

// ===================================
// VALIDATION
// ===================================
$required = ["clientName", "email", "phone", "projectName"];

foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(422);
        echo json_encode(["error" => "$field is required"]);
        exit;
    }
}

// ===================================
// SANITIZE INPUT
// ===================================
$clientName  = trim($data["clientName"]);
$companyName = trim($data["companyName"] ?? "");
$email       = filter_var($data["email"], FILTER_SANITIZE_EMAIL);
$phone       = trim($data["phone"]);
$projectName = trim($data["projectName"]);
$projectType = trim($data["projectType"] ?? "");
$timeline    = trim($data["timeline"] ?? "");
$budget      = trim($data["budget"] ?? "");
$description = trim($data["description"] ?? "");
$features    = implode(", ", $data["features"] ?? []);

// ===================================
// INSERT INTO DATABASE
// ===================================
try {
    $stmt = $pdo->prepare("
        INSERT INTO proposals 
        (client_name, company_name, email, phone, project_name, project_type, timeline, budget, description, features)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->execute([
        $clientName,
        $companyName,
        $email,
        $phone,
        $projectName,
        $projectType,
        $timeline,
        $budget,
        $description,
        $features
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database insert failed"]);
    exit;
}

// ===================================
// SEND EMAIL (OPTIONAL)
// ===================================
$subject = "New Proposal - $projectName";

$message = "
Client: $clientName
Company: $companyName
Email: $email
Phone: $phone

Project: $projectName
Type: $projectType
Timeline: $timeline
Budget: ₹$budget

Description:
$description

Features:
$features
";

$headers  = "From: {$config['from_name']} <{$config['from_email']}>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

@mail($config["admin_email"], $subject, $message, $headers);

// ===================================
// SUCCESS RESPONSE
// ===================================
echo json_encode([
    "success" => true,
    "message" => "Proposal saved successfully"
]);
