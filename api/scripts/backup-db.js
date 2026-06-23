const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../prisma/pizzeria.db");
const backupDir = path.join(__dirname, "../backups");

if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const backupPath = path.join(backupDir, `pizzeria-${timestamp}.db`);

if (fs.existsSync(dbPath)) {
  fs.copyFileSync(dbPath, backupPath);
  console.log("[BACKUP] Completato:", backupPath);
} else {
  console.error("[BACKUP] DB non trovato:", dbPath);
}
