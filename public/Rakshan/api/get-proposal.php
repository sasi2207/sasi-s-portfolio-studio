<?php
require_once __DIR__ . '/db.php';

$db = ensureDb();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = getJsonInput();
    $client_name = trim($input['client_name'] ?? '');
    $company_name = trim($input['company_name'] ?? '');
    $email = trim($input['email'] ?? '');
    $phone = trim($input['phone'] ?? '');
    $project_name = trim($input['project_name'] ?? '');
    $project_type = trim($input['project_type'] ?? 'Web Application');
    $timeline = trim($input['timeline'] ?? '');
    $budget = trim($input['budget'] ?? '0');
    $description = trim($input['description'] ?? '');
    $features = is_array($input['features'] ?? null) ? implode(', ', $input['features']) : ($input['features'] ?? '');

    if (empty($client_name) || empty($project_name)) {
        sendResponse(false, 'Client name and project name are required', 200);
    }

    try {
        $stmt = $db->prepare("INSERT INTO proposals (client_name, company_name, email, phone, project_name, project_type, timeline, budget, description, features, status, created_at) VALUES (:client_name, :company_name, :email, :phone, :project_name, :project_type, :timeline, :budget, :description, :features, 'pending', :now_val)");
        $stmt->execute([
            ':client_name' => $client_name,
            ':company_name' => $company_name,
            ':email' => $email,
            ':phone' => $phone,
            ':project_name' => $project_name,
            ':project_type' => $project_type,
            ':timeline' => $timeline,
            ':budget' => $budget,
            ':description' => $description,
            ':features' => $features,
            ':now_val' => getNow()
        ]);
        sendResponse(true, ['message' => 'Proposal created successfully in database', 'id' => $db->lastInsertId()], 200);
    } catch (Throwable $e) {
        sendResponse(false, 'Failed to save proposal: ' . $e->getMessage(), 200);
    }
} else {
    try {
        $stmt = $db->query("SELECT id, client_name, company_name, email, phone, project_name, project_type, timeline, budget, description, features, status, created_at FROM proposals ORDER BY id DESC");
        $data = $stmt->fetchAll();
        sendResponse(true, ['data' => $data ?: []]);
    } catch (Throwable $e) {
        sendResponse(false, ['message' => 'Failed to fetch proposals: ' . $e->getMessage(), 'data' => []], 200);
    }
}
?>
