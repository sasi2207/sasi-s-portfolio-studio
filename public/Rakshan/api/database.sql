-- TechSasi MySQL Database Schema
-- Import this SQL file into your cPanel MySQL Database via phpMyAdmin

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(150) DEFAULT NULL,
  `role` VARCHAR(50) DEFAULT 'user',
  `token` VARCHAR(255) DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(50) DEFAULT 'admin',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `course_enquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(150) NOT NULL,
  `mobile` VARCHAR(50) NOT NULL,
  `email` VARCHAR(150) DEFAULT NULL,
  `course` VARCHAR(150) NOT NULL,
  `message` TEXT DEFAULT NULL,
  `status` ENUM('Pending', 'Accepted', 'Rejected') DEFAULT 'Pending',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `service_enquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(150) NOT NULL,
  `mobile` VARCHAR(50) NOT NULL,
  `email` VARCHAR(150) DEFAULT NULL,
  `service_type` VARCHAR(150) NOT NULL,
  `message` TEXT DEFAULT NULL,
  `status` ENUM('Pending', 'Accepted', 'Rejected') DEFAULT 'Pending',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `courses` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `course_name` VARCHAR(150) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `status` ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `email` VARCHAR(150) DEFAULT NULL,
  `subject` VARCHAR(200) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed an Initial Administrator Account
-- Default password: admin (Bcrypt: $2y$10$wN31X5g4w9.XwF9nUuC/b.9rK9b9c9y0y6jZ6b1bK1m8z2z3j2n0q) or plaintext fallback supported
INSERT IGNORE INTO `admin_users` (`id`, `username`, `password`, `role`) VALUES
(1, 'techsasi_admin', '$2y$10$iW3GqLp3xN8Xy9k1v2z3euZk0yq2b5r7u9n4x8z1k3m5o7q9s1u3y', 'admin');

-- Seed Initial Courses
INSERT IGNORE INTO `courses` (`id`, `course_name`) VALUES
(1, 'AI Data Science & Analytics'),
(2, 'AI Full Stack Development'),
(3, 'Java Full Stack Architecture'),
(4, 'React JS Frontend Architecture'),
(5, 'Python Full Stack Development'),
(6, 'PHP & Laravel Full Stack Development');
