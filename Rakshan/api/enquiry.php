<?php
// 1. Dynamic CORS handling to prevent duplicate header errors
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
    // If testing locally from dynamic ports, fallback to matching the origin dynamically or use * safely without duplicate output
    header("Access-Control-Allow-Origin: " . ($origin ? $origin : "*"));
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

// 2. Handle preflight OPTIONS requests immediately
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 3. Enforce POST method request validation
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    exit();
}

// 4. Get and decode JSON payload data from React frontend
$jsonPayload = file_get_contents("php://input");
$data = json_decode($jsonPayload, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received."]);
    exit();
}

$fullName = trim($data['fullName'] ?? '');
$mobile   = trim($data['mobile'] ?? '');
$email    = trim($data['email'] ?? '');
$course   = trim($data['course'] ?? '');
$message  = trim($data['message'] ?? '');

// 5. Basic server-side validation checks
if (empty($fullName) || empty($mobile) || empty($email) || empty($course) || $course === 'Select Course') {
    echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
    exit();
}

// 6. Database configuration using your specified remote/host credentials
$host = "65.108.76.42";
$db_name = "techsasi_rakshan";
$username = "techsasi_2207";
$password = "SasiKutty2207@Lovely";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    // 7. Auto-create table if it doesn't exist yet
    $pdo->exec("CREATE TABLE IF NOT EXISTS course_enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(100) NOT NULL,
        mobile VARCHAR(20) NOT NULL,
        email VARCHAR(100) NOT NULL,
        course VARCHAR(150) NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )");

    // 8. Secure prepared statement execution for insertion
    $stmt = $pdo->prepare("INSERT INTO course_enquiries (full_name, mobile, email, course, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$fullName, $mobile, $email, $course, $message]);

    echo json_encode(["success" => true, "message" => "Enquiry stored successfully."]);

} catch (PDOException $e) {
    // Log error securely on server side and return user-safe message
    error_log("Database Error: " . $e->getMessage());
    echo json_encode(["success" => false, "message" => "Database connection error."]);
}
?>