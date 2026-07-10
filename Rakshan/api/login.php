<?php
header("Content-Type: application/json");

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

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

$username = trim($data["username"] ?? "");
$password = $data["password"] ?? "";

if (!$username || !$password) {
    http_response_code(422);
    echo json_encode(["error" => "Username & password required"]);
    exit();
}

try {
    // Fetch user
    $stmt = $pdo->prepare(
        "SELECT id, username, password FROM users WHERE username = ? LIMIT 1"
    );
    $stmt->execute([$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        http_response_code(401);
        echo json_encode(["error" => "Invalid username or password"]);
        exit();
    }

    // Verify password
    if (!password_verify($password, $user["password"])) {
        http_response_code(401);
        echo json_encode(["error" => "Invalid username or password"]);
        exit();
    }

    // Success response (NO role)
    echo json_encode([
        "token" => bin2hex(random_bytes(32)),
        "user" => [
            "id" => $user["id"],
            "username" => $user["username"]
        ]
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Server error"]);
}
