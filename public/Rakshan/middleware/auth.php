<?php
$config = require "../config/jwt.php";

$headers = getallheaders();
$auth = $headers["Authorization"] ?? "";

if (!str_starts_with($auth, "Bearer ")) {
  http_response_code(401);
  exit("Unauthorized");
}

$token = str_replace("Bearer ", "", $auth);
[$payload64, $signature] = explode(".", $token);

$payload = json_decode(base64_decode($payload64), true);

$valid = hash_hmac("sha256", json_encode($payload), $config["secret"]);

if ($valid !== $signature || time() > $payload["exp"]) {
  http_response_code(401);
  exit("Token invalid or expired");
}

$_USER = $payload;
