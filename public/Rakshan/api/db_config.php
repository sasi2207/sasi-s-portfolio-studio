<?php
/**
 * TechSasi MySQL & Database Configuration
 * Configured with live MySQL connection parameters
 * Visual diagnostic center: https://techsasi.com/Rakshan/api/setup.php
 */

return [
    'db_host' => getenv('DB_HOST') ?: '65.108.76.42',
    'db_name' => getenv('DB_NAME') ?: 'techsasi_rakshan',
    'db_user' => getenv('DB_USER') ?: 'techsasi_2207',
    'db_pass' => getenv('DB_PASS') !== false ? getenv('DB_PASS') : 'SasiKutty2207@Lovely',
    'db_port' => getenv('DB_PORT') ?: '3306',
    'charset' => 'utf8mb4',
];
