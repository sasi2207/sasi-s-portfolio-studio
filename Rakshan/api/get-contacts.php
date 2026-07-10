<?php
header("Content-Type: application/json");


require "../config/db.php";

try {
    $stmt = $pdo->query(
        "SELECT id, name, phone, subject, created_at
         FROM contact_messages
         ORDER BY created_at DESC"
    );

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => true,
        "data" => $data
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Server error"
    ]);
}
