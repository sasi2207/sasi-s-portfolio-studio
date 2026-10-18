<?php
/**
 * TechSasi Bulletproof Database Connection Layer
 * Supports MySQL (cPanel/Production) and auto-provisioned SQLite fallback.
 * Prevents 500 Internal Server Errors with structured diagnostics and auto-table creation.
 */

// 1. Strict CORS & JSON Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request with HTTP 200
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(["status" => "ok"]);
    exit();
}

// 2. Database Connection Credentials
$db_host = "65.108.76.42";
$db_name = "techsasi_rakshan";
$db_user = "techsasi_2207";
$db_pass = "SasiKutty2207@Lovely";
$db_port = 3306;

// Allow optional override from db_config.php or environment variables
$configFile = __DIR__ . '/db_config.php';
if (file_exists($configFile)) {
    $config = require($configFile);
    if (!empty($config['db_host'])) $db_host = $config['db_host'];
    if (!empty($config['db_name'])) $db_name = $config['db_name'];
    if (!empty($config['db_user'])) $db_user = $config['db_user'];
    if (isset($config['db_pass']) && $config['db_pass'] !== '')  $db_pass = $config['db_pass'];
    if (!empty($config['db_port'])) $db_port = (int)$config['db_port'];
}

$pdo = null;
$dbDriver = null;
$dbConnectionError = null;

// 3. Attempt MySQL Connection
$conn = null;
if (extension_loaded('pdo_mysql')) {
    $hostsToTry = array_unique([$db_host, 'localhost', '127.0.0.1']);
    foreach ($hostsToTry as $hostCandidate) {
        try {
            $dsn = "mysql:host={$hostCandidate};port={$db_port};dbname={$db_name};charset=utf8mb4";
            $pdo = new PDO($dsn, $db_user, $db_pass, [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
                PDO::ATTR_TIMEOUT            => 5,
            ]);
            $dbDriver = 'mysql';
            initTables($pdo, 'mysql');
            break;
        } catch (Throwable $e) {
            $dbConnectionError = "MySQL connection error ({$hostCandidate}): " . $e->getMessage();
            $pdo = null;
        }
    }
}

// Optional mysqli connection for procedural code
if (extension_loaded('mysqli')) {
    try {
        mysqli_report(MYSQLI_REPORT_OFF);
        $conn = @mysqli_connect($db_host, $db_user, $db_pass, $db_name, (int)$db_port);
        if (!$conn) {
            $conn = @mysqli_connect('localhost', $db_user, $db_pass, $db_name, (int)$db_port);
        }
        if ($conn) {
            mysqli_set_charset($conn, 'utf8mb4');
        }
    } catch (Throwable $ignore) {
        $conn = null;
    }
}

// 4. Fallback to SQLite if MySQL is not available or unconfigured
if ($pdo === null && extension_loaded('pdo_sqlite')) {
    try {
        $sqliteFile = __DIR__ . '/techsasi.sqlite';
        $pdo = new PDO("sqlite:" . $sqliteFile, null, null, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
        $dbDriver = 'sqlite';
        initTables($pdo, 'sqlite');
        $dbConnectionError = null;
    } catch (Throwable $sqliteErr) {
        try {
            $pdo = new PDO("sqlite::memory:", null, null, [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
            $dbDriver = 'sqlite_memory';
            initTables($pdo, 'sqlite');
            $dbConnectionError = null;
        } catch (Throwable $fatal) {
            $dbConnectionError = "SQLite fallback error: " . $fatal->getMessage();
            $pdo = null;
        }
    }
}

/**
 * Universal Table Initializer (Works on both MySQL and SQLite)
 */
function initTables(PDO $db, string $driver = 'mysql') {
    try {
        if ($driver === 'mysql') {
            $db->exec("
                CREATE TABLE IF NOT EXISTS `users` (
                    `id` INT AUTO_INCREMENT PRIMARY KEY,
                    `username` VARCHAR(100) NOT NULL UNIQUE,
                    `password` VARCHAR(255) NOT NULL,
                    `email` VARCHAR(150) DEFAULT NULL,
                    `role` VARCHAR(50) DEFAULT 'user',
                    `token` VARCHAR(255) DEFAULT NULL,
                    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
                    `updated_at` DATETIME DEFAULT NULL
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

                CREATE TABLE IF NOT EXISTS `admin_users` (
                    `id` INT AUTO_INCREMENT PRIMARY KEY,
                    `username` VARCHAR(100) NOT NULL UNIQUE,
                    `password` VARCHAR(255) NOT NULL,
                    `role` VARCHAR(50) DEFAULT 'admin',
                    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

                CREATE TABLE IF NOT EXISTS `course_enquiries` (
                    `id` INT AUTO_INCREMENT PRIMARY KEY,
                    `full_name` VARCHAR(150) NOT NULL,
                    `mobile` VARCHAR(50) NOT NULL,
                    `email` VARCHAR(150) DEFAULT NULL,
                    `course` VARCHAR(150) NOT NULL,
                    `message` TEXT DEFAULT NULL,
                    `status` VARCHAR(50) DEFAULT 'Pending',
                    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

                CREATE TABLE IF NOT EXISTS `service_enquiries` (
                    `id` INT AUTO_INCREMENT PRIMARY KEY,
                    `full_name` VARCHAR(150) NOT NULL,
                    `mobile` VARCHAR(50) NOT NULL,
                    `email` VARCHAR(150) DEFAULT NULL,
                    `service_type` VARCHAR(150) NOT NULL,
                    `message` TEXT DEFAULT NULL,
                    `status` VARCHAR(50) DEFAULT 'Pending',
                    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

                CREATE TABLE IF NOT EXISTS `courses` (
                    `id` INT AUTO_INCREMENT PRIMARY KEY,
                    `course_name` VARCHAR(150) NOT NULL,
                    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

                CREATE TABLE IF NOT EXISTS `proposals` (
                    `id` INT AUTO_INCREMENT PRIMARY KEY,
                    `client_name` VARCHAR(150) NOT NULL,
                    `company_name` VARCHAR(150) DEFAULT NULL,
                    `email` VARCHAR(150) DEFAULT NULL,
                    `phone` VARCHAR(50) DEFAULT NULL,
                    `project_name` VARCHAR(200) NOT NULL,
                    `project_type` VARCHAR(100) DEFAULT 'Web Application',
                    `timeline` VARCHAR(100) DEFAULT NULL,
                    `budget` VARCHAR(50) DEFAULT '0',
                    `description` TEXT DEFAULT NULL,
                    `features` TEXT DEFAULT NULL,
                    `status` VARCHAR(50) DEFAULT 'pending',
                    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

                CREATE TABLE IF NOT EXISTS `contacts` (
                    `id` INT AUTO_INCREMENT PRIMARY KEY,
                    `name` VARCHAR(150) NOT NULL,
                    `phone` VARCHAR(50) NOT NULL,
                    `email` VARCHAR(150) DEFAULT NULL,
                    `subject` VARCHAR(200) DEFAULT NULL,
                    `message` TEXT DEFAULT NULL,
                    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
            ");
        } else {
            // SQLite Syntax
            $db->exec("
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT UNIQUE NOT NULL,
                    password TEXT NOT NULL,
                    email TEXT,
                    role TEXT DEFAULT 'user',
                    token TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME
                );

                CREATE TABLE IF NOT EXISTS admin_users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT UNIQUE NOT NULL,
                    password TEXT NOT NULL,
                    role TEXT DEFAULT 'admin',
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );

                CREATE TABLE IF NOT EXISTS course_enquiries (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    full_name TEXT NOT NULL,
                    mobile TEXT NOT NULL,
                    email TEXT,
                    course TEXT NOT NULL,
                    message TEXT,
                    status TEXT DEFAULT 'Pending',
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );

                CREATE TABLE IF NOT EXISTS service_enquiries (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    full_name TEXT NOT NULL,
                    mobile TEXT NOT NULL,
                    email TEXT,
                    service_type TEXT NOT NULL,
                    message TEXT,
                    status TEXT DEFAULT 'Pending',
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );

                CREATE TABLE IF NOT EXISTS courses (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    course_name TEXT NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );

                CREATE TABLE IF NOT EXISTS proposals (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    client_name TEXT NOT NULL,
                    company_name TEXT,
                    email TEXT,
                    phone TEXT,
                    project_name TEXT NOT NULL,
                    project_type TEXT DEFAULT 'Web Application',
                    timeline TEXT,
                    budget TEXT DEFAULT '0',
                    description TEXT,
                    features TEXT,
                    status TEXT DEFAULT 'pending',
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );

                CREATE TABLE IF NOT EXISTS contacts (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    phone TEXT NOT NULL,
                    email TEXT,
                    subject TEXT,
                    message TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            ");
        }

        // Seed default administrator if not present
        $adminStmt = $db->prepare("SELECT id FROM admin_users WHERE username = :username LIMIT 1");
        $adminStmt->execute([':username' => 'techsasi_admin']);
        if (!$adminStmt->fetch()) {
            $hash = password_hash('techsasi2026', PASSWORD_BCRYPT);
            $insAdmin = $db->prepare("INSERT INTO admin_users (username, password, role) VALUES ('techsasi_admin', :hash, 'admin')");
            $insAdmin->execute([':hash' => $hash]);

            // Also seed in users table
            try {
                $insUser = $db->prepare("INSERT INTO users (username, password, email, role) VALUES ('techsasi_admin', :hash, 'admin@techsasi.com', 'admin')");
                $insUser->execute([':hash' => $hash]);
            } catch (Throwable $ignore) {}
        }

        // Seed default courses if table is empty
        $courseCheck = $db->query("SELECT id FROM courses LIMIT 1")->fetch();
        if (!$courseCheck) {
            $defaultCourses = [
                'AI Data Science & Analytics',
                'AI Full Stack Development',
                'Java Full Stack Architecture',
                'React JS Frontend Architecture',
                'Python Full Stack Development',
                'PHP & Laravel Full Stack Development'
            ];
            $stmtCourse = $db->prepare("INSERT INTO courses (course_name) VALUES (:name)");
            foreach ($defaultCourses as $courseName) {
                $stmtCourse->execute([':name' => $courseName]);
            }
        }
    } catch (Throwable $e) {
        error_log("TechSasi initTables warning: " . $e->getMessage());
    }
}

/**
 * Ensures Database Connection or returns friendly diagnostic JSON without 500 error
 */
function ensureDb(): PDO {
    global $pdo, $dbConnectionError;
    if ($pdo === null) {
        sendResponse(false, [
            "message" => "Database connection unavailable. Please verify MySQL configuration in db_config.php or visit Rakshan/api/setup.php.",
            "error_detail" => $dbConnectionError,
            "setup_url" => "https://techsasi.com/Rakshan/api/setup.php"
        ], 200);
    }
    return $pdo;
}

/**
 * Returns current timestamp in SQL-safe format
 */
function getNow(): string {
    return date('Y-m-d H:i:s');
}

/**
 * Read incoming JSON body
 */
function getJsonInput(): array {
    $raw = file_get_contents('php://input');
    if (!$raw) {
        return $_POST ?: [];
    }
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : ($_POST ?: []);
}

/**
 * Send JSON response and exit
 */
function sendResponse(bool $success, $dataOrMessage, int $statusCode = 200) {
    http_response_code($statusCode);
    if (is_string($dataOrMessage)) {
        echo json_encode([
            "success" => $success,
            "message" => $dataOrMessage
        ]);
    } else {
        echo json_encode(array_merge(["success" => $success], (array)$dataOrMessage));
    }
    exit();
}
?>
