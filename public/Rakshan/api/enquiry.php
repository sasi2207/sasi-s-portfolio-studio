<?php
require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Method not allowed. Use POST.', 200);
}

$input = getJsonInput();
$fullName = trim($input['fullName'] ?? ($input['full_name'] ?? ''));
$mobile = trim($input['mobile'] ?? '');
$email = trim($input['email'] ?? '');
$course = trim($input['course'] ?? '');
$message = trim($input['message'] ?? '');

if (empty($fullName) || empty($mobile) || empty($course)) {
    sendResponse(false, 'Name, mobile, and target course are required.', 200);
}

$db = ensureDb();

try {
    $stmt = $db->prepare("INSERT INTO course_enquiries (full_name, mobile, email, course, message, status, created_at) VALUES (:full_name, :mobile, :email, :course, :message, 'Pending', :now_val)");
    $stmt->execute([
        ':full_name' => $fullName,
        ':mobile'    => $mobile,
        ':email'     => $email,
        ':course'    => $course,
        ':message'   => $message,
        ':now_val'   => getNow()
    ]);

    sendResponse(true, 'Course enquiry submitted successfully to database.', 200);
} catch (Throwable $e) {
    sendResponse(false, 'Database insert error: ' . $e->getMessage(), 200);
}
?>
