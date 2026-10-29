<?php
require_once __DIR__ . '/db.php';

$action = $_GET['action'] ?? '';
$input = getJsonInput();
$db = ensureDb();

switch ($action) {
    case 'login':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            sendResponse(false, 'Use POST for login', 200);
        }
        $username = trim($input['username'] ?? '');
        $password = trim($input['password'] ?? '');

        if (!$username || !$password) {
            sendResponse(false, 'Username and password required', 200);
        }

        try {
            $stmt = $db->prepare("SELECT id, username, password FROM admin_users WHERE username = :username LIMIT 1");
            $stmt->execute([':username' => $username]);
            $admin = $stmt->fetch();

            if (!$admin) {
                // Also check users table with role = admin
                $stmt = $db->prepare("SELECT id, username, password FROM users WHERE username = :username AND role = 'admin' LIMIT 1");
                $stmt->execute([':username' => $username]);
                $admin = $stmt->fetch();
            }

            if ($admin) {
                $hash = $admin['password'];
                if (password_verify($password, $hash) || $password === $hash) {
                    $token = bin2hex(random_bytes(32));
                    sendResponse(true, [
                        'message' => 'Admin authentication successful',
                        'token' => $token,
                        'admin' => ['id' => $admin['id'], 'username' => $admin['username']]
                    ], 200);
                }
            }

            sendResponse(false, 'Invalid admin credentials in database', 200);
        } catch (Throwable $e) {
            sendResponse(false, 'Database error: ' . $e->getMessage(), 200);
        }
        break;

    case 'get_enquiries':
        try {
            $stmt = $db->query("SELECT id, full_name, mobile, email, course, message, status, created_at FROM course_enquiries ORDER BY id DESC");
            $data = $stmt->fetchAll();
            sendResponse(true, ['data' => $data ?: []]);
        } catch (Throwable $e) {
            sendResponse(false, ['message' => 'Failed to fetch course enquiries: ' . $e->getMessage(), 'data' => []], 200);
        }
        break;

    case 'get_service_enquiries':
        try {
            $stmt = $db->query("SELECT id, full_name, mobile, email, service_type, message, status, created_at FROM service_enquiries ORDER BY id DESC");
            $data = $stmt->fetchAll();
            sendResponse(true, ['data' => $data ?: []]);
        } catch (Throwable $e) {
            sendResponse(false, ['message' => 'Failed to fetch service enquiries: ' . $e->getMessage(), 'data' => []], 200);
        }
        break;

    case 'update_enquiry_status':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            sendResponse(false, 'Use POST', 200);
        }
        $type = $input['type'] ?? '';
        $id = intval($input['id'] ?? 0);
        $status = $input['status'] ?? 'Pending';

        if (!$id || !in_array($status, ['Accepted', 'Rejected', 'Pending'])) {
            sendResponse(false, 'Invalid parameters', 200);
        }

        $table = ($type === 'courses') ? 'course_enquiries' : 'service_enquiries';

        try {
            $stmt = $db->prepare("UPDATE {$table} SET status = :status WHERE id = :id");
            $stmt->execute([':status' => $status, ':id' => $id]);
            sendResponse(true, ['message' => 'Enquiry status updated successfully'], 200);
        } catch (Throwable $e) {
            sendResponse(false, 'Database update failed: ' . $e->getMessage(), 200);
        }
        break;

    case 'delete_enquiry':
        $type = $_GET['type'] ?? ($input['type'] ?? '');
        $id = intval($_GET['id'] ?? ($input['id'] ?? 0));

        if (!$id) {
            sendResponse(false, 'ID required', 200);
        }

        $table = ($type === 'courses') ? 'course_enquiries' : 'service_enquiries';

        try {
            $stmt = $db->prepare("DELETE FROM {$table} WHERE id = :id");
            $stmt->execute([':id' => $id]);
            sendResponse(true, ['message' => 'Enquiry deleted successfully'], 200);
        } catch (Throwable $e) {
            sendResponse(false, 'Database delete failed: ' . $e->getMessage(), 200);
        }
        break;

    case 'get_courses':
        try {
            $stmt = $db->query("SELECT id, course_name, created_at FROM courses ORDER BY id ASC");
            $data = $stmt->fetchAll();
            sendResponse(true, ['data' => $data ?: []]);
        } catch (Throwable $e) {
            sendResponse(false, ['message' => 'Failed to fetch courses: ' . $e->getMessage(), 'data' => []], 200);
        }
        break;

    case 'add_course':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            sendResponse(false, 'Use POST', 200);
        }
        $course_name = trim($input['course_name'] ?? '');
        if (!$course_name) {
            sendResponse(false, 'Course name is required', 200);
        }

        try {
            $stmt = $db->prepare("INSERT INTO courses (course_name, created_at) VALUES (:name, :now_val)");
            $stmt->execute([':name' => $course_name, ':now_val' => getNow()]);
            $newId = $db->lastInsertId();
            sendResponse(true, ['data' => ['id' => $newId, 'course_name' => $course_name]], 200);
        } catch (Throwable $e) {
            sendResponse(false, 'Failed to add course: ' . $e->getMessage(), 200);
        }
        break;

    case 'delete_course':
        $id = intval($_GET['id'] ?? ($input['id'] ?? 0));
        if (!$id) {
            sendResponse(false, 'Course ID required', 200);
        }

        try {
            $stmt = $db->prepare("DELETE FROM courses WHERE id = :id");
            $stmt->execute([':id' => $id]);
            sendResponse(true, ['message' => 'Course deleted successfully'], 200);
        } catch (Throwable $e) {
            sendResponse(false, 'Failed to delete course: ' . $e->getMessage(), 200);
        }
        break;

    default:
        sendResponse(false, 'Unknown action requested', 200);
}
?>
