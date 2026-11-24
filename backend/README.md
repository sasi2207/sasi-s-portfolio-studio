# TechSasi PHP Backend & Database Guide

All backend API scripts are located in `/public/Rakshan/api/`. Because they reside in `/public/`, Vite includes them in `/dist/Rakshan/api/` during `npm run build`, and your GitHub Actions deployment (`.github/workflows/deploy.yml`) publishes them directly to your hosting.

---

## 1. Quick Visual Setup & Diagnostic Center (Recommended)

Visit the built-in diagnostic and configuration dashboard in your browser:
👉 **`https://techsasi.com/Rakshan/api/setup.php`**

From this page, you can:
- Verify PHP version and active PDO database drivers (`pdo_mysql`, `pdo_sqlite`).
- Enter and save your cPanel MySQL credentials into `db_config.php` with one click.
- Auto-generate all required database tables and verify default admin credentials.
- Inspect real-time record counts for all enquiries, courses, and proposals.

---

## 2. Direct MySQL Configuration (`db_config.php`)

You can edit `public/Rakshan/api/db_config.php` in your cPanel File Manager:

```php
return [
    'db_host' => 'localhost',              // or 127.0.0.1
    'db_name' => 'youruser_techsasi_db',   // cPanel database name
    'db_user' => 'youruser_techsasi_user', // cPanel database username
    'db_pass' => 'your_strong_password',   // cPanel database password
    'db_port' => '3306',
    'charset' => 'utf8mb4',
];
```

---

## 3. Auto-Provisioning & Bulletproof Fallback

1. **Automatic Schema Creation**: Whenever MySQL connects, `db.php` checks if tables exist. If empty, it creates all tables (`users`, `admin_users`, `course_enquiries`, `service_enquiries`, `courses`, `proposals`, `contacts`) and seeds the default admin account:
   - **Admin Username**: `techsasi_admin`
   - **Admin Password**: `techsasi2026`
2. **SQLite Fallback**: If MySQL credentials are not yet configured or temporarily offline, the API falls back to SQLite (`techsasi.sqlite`), completely eliminating HTTP 500 crashes.
3. **HTTP 200 Diagnostic Responses**: All endpoints return structured JSON with `{ success: false, message: ... }` on operational errors rather than uncaught 500 status codes.

---

## 4. Endpoints Overview

| File | Method | Description |
|---|---|---|
| `login.php` | `POST` | Authenticates users against `users` and `admin_users` tables. |
| `register.php` | `POST` | Registers new accounts into the `users` table. |
| `admin_api.php` | `GET/POST` | Handles admin login and full CRUD (enquiries, courses, status updates). |
| `enquiry.php` | `POST` | Stores course enquiry submissions. |
| `get_enquiries.php` | `GET` | Fetches all course enquiries safely. |
| `get-proposal.php` | `GET/POST` | Fetches and submits client project proposals. |
| `get-contacts.php` | `GET/POST` | Fetches and submits contact inquiry messages. |
| `setup.php` | `GET/POST` | Visual database diagnostic, test suite & configuration panel. |
| `.htaccess` | - | Enables CORS headers and handles preflight OPTIONS requests. |
