<?php
header("Content-Type: application/json");


require "../config/db.php";

$id = $_GET["id"] ?? null;

if (!$id) {
    http_response_code(400);
    echo json_encode(["error" => "ID required"]);
    exit();
}

try {
    $stmt = $pdo->prepare(
        "SELECT * FROM contact_messages WHERE id = ?"
    );
    $stmt->execute([$id]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$data) {
        http_response_code(404);
        echo json_encode(["error" => "Not found"]);
        exit();
    }

    echo json_encode([
        "success" => true,
        "data" => $data
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Server error"]);
}
