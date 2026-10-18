<?php
/**
 * TechSasi Database Setup & Diagnostic Center
 * Access via browser: https://techsasi.com/Rakshan/api/setup.php
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);

$configFile = __DIR__ . '/db_config.php';
$savedNotice = null;
$errorNotice = null;

// Handle Form Submission to Save Database Credentials
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'save_config') {
    $newConfig = [
        'db_host' => trim($_POST['db_host'] ?? '65.108.76.42'),
        'db_name' => trim($_POST['db_name'] ?? 'techsasi_rakshan'),
        'db_user' => trim($_POST['db_user'] ?? 'techsasi_2207'),
        'db_pass' => $_POST['db_pass'] ?? 'SasiKutty2207@Lovely',
        'db_port' => trim($_POST['db_port'] ?? '3306'),
        'charset' => 'utf8mb4',
    ];

    $content = "<?php\n// TechSasi Database Configuration\nreturn " . var_export($newConfig, true) . ";\n";
    if (@file_put_contents($configFile, $content)) {
        $savedNotice = "Configuration successfully saved to db_config.php!";
    } else {
        $errorNotice = "Could not write to db_config.php. Please check file permissions on cPanel (chmod 644 or 666).";
    }
}

// Require db.php to load current status
require_once __DIR__ . '/db.php';

// Diagnostics
$phpVersion = phpversion();
$hasPdoMysql = extension_loaded('pdo_mysql');
$hasPdoSqlite = extension_loaded('pdo_sqlite');

// Query table statistics if connected
$tableStats = [];
if ($pdo !== null) {
    $tables = ['users', 'admin_users', 'course_enquiries', 'service_enquiries', 'courses', 'proposals', 'contacts'];
    foreach ($tables as $t) {
        try {
            $count = $pdo->query("SELECT COUNT(*) FROM {$t}")->fetchColumn();
            $tableStats[$t] = $count;
        } catch (Throwable $e) {
            $tableStats[$t] = "Not Created Yet";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechSasi Database & API Diagnostic Center</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #0b0f17; color: #f1f5f9; font-family: ui-sans-serif, system-ui, sans-serif; }
    </style>
</head>
<body class="p-4 md:p-8 max-w-4xl mx-auto">
    <header class="flex items-center justify-between pb-6 border-b border-slate-800 mb-8">
        <div>
            <h1 class="text-2xl font-black text-amber-400">TechSasi Database Diagnostic Center</h1>
            <p class="text-xs text-slate-400 font-mono mt-1">Rakshan REST API &bull; Production Health Check</p>
        </div>
        <div class="text-right">
            <span class="text-xs font-mono px-3 py-1 rounded-full <?= $pdo ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30' ?>">
                <?= $pdo ? 'DATABASE LIVE (' . strtoupper($dbDriver) . ')' : 'DATABASE DISCONNECTED' ?>
            </span>
        </div>
    </header>

    <?php if ($savedNotice): ?>
        <div class="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-300 text-sm">
            &check; <?= htmlspecialchars($savedNotice) ?>
        </div>
    <?php endif; ?>

    <?php if ($errorNotice): ?>
        <div class="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-500 text-rose-300 text-sm">
            &cross; <?= htmlspecialchars($errorNotice) ?>
        </div>
    <?php endif; ?>

    <!-- System Status Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div class="text-xs text-slate-400 font-mono">PHP Version</div>
            <div class="text-lg font-bold text-slate-100 mt-1"><?= htmlspecialchars($phpVersion) ?></div>
        </div>
        <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div class="text-xs text-slate-400 font-mono">MySQL Driver (pdo_mysql)</div>
            <div class="text-lg font-bold mt-1 <?= $hasPdoMysql ? 'text-emerald-400' : 'text-amber-400' ?>">
                <?= $hasPdoMysql ? 'Enabled' : 'Missing in cPanel PHP' ?>
            </div>
        </div>
        <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div class="text-xs text-slate-400 font-mono">Active Database Engine</div>
            <div class="text-lg font-bold mt-1 <?= $pdo ? 'text-cyan-400' : 'text-rose-400' ?>">
                <?= $pdo ? htmlspecialchars(strtoupper($dbDriver)) : 'None' ?>
            </div>
        </div>
    </div>

    <!-- MySQL Configuration Editor Form -->
    <div class="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 mb-8 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <h2 class="text-lg font-bold text-slate-200">cPanel MySQL Credentials</h2>
            <span class="text-xs text-slate-400 font-mono">Updates db_config.php</span>
        </div>

        <form method="POST" class="space-y-4">
            <input type="hidden" name="action" value="save_config">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-mono text-slate-400 mb-1">Host (usually 'localhost' or '127.0.0.1')</label>
                    <input type="text" name="db_host" value="<?= htmlspecialchars($db_host) ?>" required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-100 focus:border-amber-400 focus:outline-none">
                </div>
                <div>
                    <label class="block text-xs font-mono text-slate-400 mb-1">Database Name (e.g. techsasi_db)</label>
                    <input type="text" name="db_name" value="<?= htmlspecialchars($db_name) ?>" required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-100 focus:border-amber-400 focus:outline-none">
                </div>
                <div>
                    <label class="block text-xs font-mono text-slate-400 mb-1">MySQL Username</label>
                    <input type="text" name="db_user" value="<?= htmlspecialchars($db_user) ?>" required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-100 focus:border-amber-400 focus:outline-none">
                </div>
                <div>
                    <label class="block text-xs font-mono text-slate-400 mb-1">MySQL Password</label>
                    <input type="password" name="db_pass" value="<?= htmlspecialchars($db_pass) ?>" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-100 focus:border-amber-400 focus:outline-none">
                </div>
            </div>
            <div class="pt-2 flex items-center justify-between">
                <p class="text-xs text-slate-400">If using SQLite fallback, MySQL fields can be left default.</p>
                <button type="submit" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition">
                    Save &amp; Test MySQL Connection
                </button>
            </div>
        </form>
    </div>

    <!-- Live Database Tables Status -->
    <?php if ($pdo): ?>
        <div class="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                <h2 class="text-lg font-bold text-slate-200">Database Tables &amp; Record Counts</h2>
                <span class="text-xs text-emerald-400 font-mono">Auto-provisioned &amp; Ready</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <?php foreach ($tableStats as $tbl => $cnt): ?>
                    <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                        <div class="text-[11px] font-mono text-slate-400"><?= htmlspecialchars($tbl) ?></div>
                        <div class="text-lg font-bold text-amber-400 mt-1"><?= htmlspecialchars($cnt) ?></div>
                    </div>
                <?php endforeach; ?>
            </div>
            <div class="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span>Default Admin Account: <strong class="text-amber-400 font-mono">techsasi_admin</strong></span>
                <span>Default Password: <strong class="text-amber-400 font-mono">techsasi2026</strong></span>
            </div>
        </div>
    <?php endif; ?>
</body>
</html>
