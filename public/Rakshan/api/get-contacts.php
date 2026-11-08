<?php
require_once __DIR__ . '/db.php';

$db = ensureDb();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = getJsonInput();
    $name = trim($input['name'] ?? '');
    $phone = trim($input['phone'] ?? '');
    $email = trim($input['email'] ?? '');
    $subject = trim($input['subject'] ?? 'Website Inquiry');
    $message = trim($input['message'] ?? '');

    if (empty($name) || empty($phone)) {
        sendResponse(false, 'Name and phone are required', 200);
    }

    try {
        $stmt = $db->prepare("INSERT INTO contacts (name, phone, email, subject, message, created_at) VALUES (:name, :phone, :email, :subject, :message, :now_val)");
        $stmt->execute([
            ':name'    => $name,
            ':phone'   => $phone,
            ':email'   => $email,
            ':subject' => $subject,
            ':message' => $message,
            ':now_val' => getNow()
        ]);
        sendResponse(true, ['message' => 'Contact inquiry saved successfully in database', 'id' => $db->lastInsertId()], 200);
    } catch (Throwable $e) {
        sendResponse(false, 'Database insert error: ' . $e->getMessage(), 200);
    }
} else {
    try {
        $stmt = $db->query("SELECT id, name, phone, email, subject, message, created_at FROM contacts ORDER BY id DESC");
        $data = $stmt->fetchAll();
        sendResponse(true, ['data' => $data ?: []]);
    } catch (Throwable $e) {
        sendResponse(false, ['message' => 'Database query error: ' . $e->getMessage(), 'data' => []], 200);
    }
}
?>
