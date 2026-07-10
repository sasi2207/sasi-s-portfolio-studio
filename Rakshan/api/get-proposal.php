<?php
// ===================================
// CORS HEADERS
// ===================================
header("Content-Type: application/json");


// ===================================
// HANDLE PREFLIGHT REQUEST
// ===================================
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ===================================
// ONLY ALLOW GET
// ===================================
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// ===================================
// LOAD DATABASE CONFIG
// ===================================
require_once __DIR__ . "/../config/db.php";

// ===================================
// FETCH DATA
// ===================================
try {
   $stmt = $pdo->query("
    SELECT 
        id,
        client_name,
        company_name,
        email,
        phone,
        project_name,
        project_type,
        timeline,
        budget,
        description,
        features,
        created_at
    FROM proposals
    ORDER BY id DESC
");


    $proposals = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => true,
        "count"   => count($proposals),
        "data"    => $proposals
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error"   => "Failed to fetch proposals"
    ]);
}
