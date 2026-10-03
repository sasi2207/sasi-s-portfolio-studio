<?php
// Zero header declarations inside PHP to prevent server-level duplication
$host = "65.108.76.42";
$db_name = "techsasi_rakshan";
$username = "techsasi_2207";
$password = "SasiKutty2207@Lovely";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    $action = isset($_GET['action']) ? $_GET['action'] : '';

    // --- 1. ADMIN LOGIN ---
    if ($action === 'login') {
        $input = file_get_contents("php://input");
        $data = json_decode($input, true);
        
        $user = isset($data['username']) ? $data['username'] : '';
        $pass = isset($data['password']) ? $data['password'] : '';

        $stmt = $pdo->prepare("SELECT * FROM admin_users WHERE username = ? AND password = ?");
        $stmt->execute([$user, $pass]);
        $found = $stmt->fetch();

        if ($found) {
            echo json_encode(["success" => true, "token" => bin2hex(random_bytes(16))]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid credentials"]);
        }
        exit();
    }

    // --- 2. MANAGE COURSES ---
    if ($action === 'get_courses') {
        $stmt = $pdo->query("SELECT * FROM courses ORDER BY course_name ASC");
        echo json_encode(["success" => true, "data" => $stmt->fetchAll()]);
        exit();
    }

    if ($action === 'add_course') {
        $input = file_get_contents("php://input");
        $data = json_decode($input, true);
        $name = isset($data['course_name']) ? $data['course_name'] : '';
        
        if (!empty($name)) {
            $stmt = $pdo->prepare("INSERT INTO courses (course_name) VALUES (?)");
            $stmt->execute([$name]);
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Course name cannot be empty"]);
        }
        exit();
    }

    if ($action === 'delete_course') {
        $id = isset($_GET['id']) ? $_GET['id'] : '';
        if (!empty($id)) {
            $stmt = $pdo->prepare("DELETE FROM courses WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid course ID"]);
        }
        exit();
    }

    // --- 3. GET COURSE ENQUIRIES ---
    if ($action === 'get_enquiries') {
        $stmt = $pdo->query("SELECT * FROM course_enquiries ORDER BY created_at DESC");
        echo json_encode(["success" => true, "data" => $stmt->fetchAll()]);
        exit();
    }

    // --- 4. CREATE WEB DEVELOPMENT SERVICE ENQUIRY ---
    if ($action === 'create_service_enquiry') {
        $input = file_get_contents("php://input");
        $data = json_decode($input, true);

        $full_name = isset($data['full_name']) ? trim($data['full_name']) : '';
        $email = isset($data['email']) ? trim($data['email']) : '';
        $mobile = isset($data['mobile']) ? trim($data['mobile']) : '';
        $service_type = isset($data['service_type']) ? trim($data['service_type']) : '';
        $message = isset($data['message']) ? trim($data['message']) : '';

        if (!empty($full_name) && !empty($email) && !empty($mobile)) {
            $stmt = $pdo->prepare("INSERT INTO service_enquiries (full_name, email, mobile, service_type, message, status) VALUES (?, ?, ?, ?, ?, 'Pending')");
            $stmt->execute([$full_name, $email, $mobile, $service_type, $message]);
            
            echo json_encode(["success" => true, "message" => "Service enquiry submitted successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "Please fill all required fields"]);
        }
        exit();
    }

    // --- 5. GET SERVICE ENQUIRIES ---
    if ($action === 'get_service_enquiries') {
        $stmt = $pdo->query("SELECT * FROM service_enquiries ORDER BY created_at DESC");
        echo json_encode(["success" => true, "data" => $stmt->fetchAll()]);
        exit();
    }

    // --- 6. UPDATE ENQUIRY STATUS (Accept / Reject) ---
    if ($action === 'update_enquiry_status') {
        $input = file_get_contents("php://input");
        $data = json_decode($input, true);
        
        $type = isset($data['type']) ? $data['type'] : ''; // 'courses' or 'services'
        $id = isset($data['id']) ? $data['id'] : '';
        $status = isset($data['status']) ? $data['status'] : ''; // 'Accepted' or 'Rejected'

        $table = ($type === 'courses') ? 'course_enquiries' : 'service_enquiries';

        if (!empty($id) && !empty($status)) {
            $stmt = $pdo->prepare("UPDATE $table SET status = ? WHERE id = ?");
            $stmt->execute([$status, $id]);
            echo json_encode(["success" => true, "message" => "Status updated successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid parameters"]);
        }
        exit();
    }

    // --- 7. DELETE ENQUIRY ---
    if ($action === 'delete_enquiry') {
        $type = isset($_GET['type']) ? $_GET['type'] : ''; // 'courses' or 'services'
        $id = isset($_GET['id']) ? $_GET['id'] : '';

        $table = ($type === 'courses') ? 'course_enquiries' : 'service_enquiries';

        if (!empty($id)) {
            $stmt = $pdo->prepare("DELETE FROM $table WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(["success" => true, "message" => "Enquiry deleted successfully"]);
        } else {
            echo json_encode(["success" => false, "message" => "Invalid ID"]);
        }
        exit();
    }

    echo json_encode(["success" => false, "message" => "Invalid action requested"]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>