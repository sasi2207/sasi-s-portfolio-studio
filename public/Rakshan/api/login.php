<?php
require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Method not allowed. Use POST.', 200);
}

$input = getJsonInput();
$username = trim($input['username'] ?? '');
$password = trim($input['password'] ?? '');

if (empty($username) || empty($password)) {
    sendResponse(false, 'Username and password are required.', 200);
}

$db = ensureDb();

try {
    // 1. Check in `users` table
    $stmt = $db->prepare("SELECT id, username, password, email, role FROM users WHERE username = :username LIMIT 1");
    $stmt->execute([':username' => $username]);
    $user = $stmt->fetch();

    // 2. If not found in `users`, check `admin_users` table
    if (!$user) {
        $stmt = $db->prepare("SELECT id, username, password, role FROM admin_users WHERE username = :username LIMIT 1");
        $stmt->execute([':username' => $username]);
        $user = $stmt->fetch();
    }

    if ($user) {
        $storedHash = $user['password'];
        $isValid = false;

        // Verify bcrypt hash or plaintext match (if legacy)
        if (password_verify($password, $storedHash) || $password === $storedHash) {
            $isValid = true;
        }

        if ($isValid) {
            $token = bin2hex(random_bytes(32));
            
            // Optionally update last login timestamp or session token in DB
            try {
                $upd = $db->prepare("UPDATE users SET token = :token, updated_at = :now_val WHERE id = :id");
                $upd->execute([':token' => $token, ':now_val' => getNow(), ':id' => $user['id']]);
            } catch (Throwable $ignore) {
                // Ignore if column doesn't match
            }

            sendResponse(true, [
                "message" => "Login successful",
                "token" => $token,
                "user" => [
                    "id" => $user['id'],
                    "username" => $user['username'],
                    "email" => $user['email'] ?? null,
                    "role" => $user['role'] ?? 'user'
                ]
            ], 200);
        }
    }

    sendResponse(false, 'Invalid username or password in database.', 200);

} catch (Throwable $e) {
    sendResponse(false, 'Database authentication error: ' . $e->getMessage(), 200);
}
?>
