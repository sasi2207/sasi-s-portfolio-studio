<?php
require_once __DIR__ . '/db.php';

$db = ensureDb();

try {
    $stmt = $db->query("SELECT id, full_name, mobile, email, course, message, status, created_at FROM course_enquiries ORDER BY id DESC");
    $data = $stmt->fetchAll();
    sendResponse(true, ['data' => $data ?: []]);
} catch (Throwable $e) {
    sendResponse(false, [
        'message' => 'Failed to query enquiries: ' . $e->getMessage(),
        'data' => []
    ], 200);
}
?>
