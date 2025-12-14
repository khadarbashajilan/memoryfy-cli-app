import { fileURLToPath } from "node:url";
import fs from "fs/promises";

const DB_Path = fileURLToPath(new URL("../db.json", import.meta.url));

console.log(DB_Path);

export const getDB = async () => {
  const db = await fs.readFile(DB_Path, "utf-8");
  return JSON.parse(db);
};

export const saveDB = async (db) => {
  await fs.writeFile(DB_Path, JSON.stringify(db, null, 2));
  return db;
};

export const insertDB = async (data) => {
  const db = await getDB();
  db.memories.push(data);
  await saveDB(db);
  return data;
};