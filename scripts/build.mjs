import fs from "node:fs";
import path from "node:path";
import AdmZip from "adm-zip";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(path.join(root, "main.mjs"), path.join(dist, "main.mjs"));
fs.copyFileSync(path.join(root, "secagent-plugin.json"), path.join(dist, "secagent-plugin.json"));
fs.copyFileSync(path.join(root, "README.md"), path.join(dist, "README.md"));
fs.cpSync(path.join(root, "skills"), path.join(dist, "skills"), { recursive: true });

const version = JSON.parse(fs.readFileSync(path.join(root, "secagent-plugin.json"), "utf8")).version;
const archive = new AdmZip();
archive.addLocalFolder(dist);
archive.writeZip(path.join(dist, `secscore-connector-${version}.zip`));
console.log(`Created dist/secscore-connector-${version}.zip`);
