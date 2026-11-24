<?php
require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Method not allowed. Use POST.', 200);
}

$input = getJsonInput();
$username = trim($input['username'] ?? '');
$password = trim($input['password'] ?? '');
$email = trim($input['email'] ?? '');

if (empty($username) || empty($password)) {
    sendResponse(false, 'Username and password are required.', 200);
}

$db = ensureDb();

try {
    // Check if username already exists
    $stmt = $db->prepare("SELECT id FROM users WHERE username = :username LIMIT 1");
    $stmt->execute([':username' => $username]);
    if ($stmt->fetch()) {
        sendResponse(false, 'Username is already registered in database.', 200);
    }

    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    $insertStmt = $db->prepare("INSERT INTO users (username, password, email, role, created_at) VALUES (:username, :password, :email, 'user', :now_val)");
    $insertStmt->execute([
        ':username' => $username,
        ':password' => $hashedPassword,
        ':email'    => $email,
        ':now_val'  => getNow()
    ]);

    sendResponse(true, 'User registered successfully in database.', 200);

} catch (Throwable $e) {
    sendResponse(false, 'Database registration error: ' . $e->getMessage(), 200);
}
?>
