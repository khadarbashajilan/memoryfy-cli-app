import { insertDB, getDB, saveDB } from "./db.js";
import chalk from "chalk";

export const newMemory = async (memory, tags) => {
  const data = {
    tags,
    content: memory,
    id: Date.now(),
  };
  await insertDB(data);
  return data;
};

export const getAllmemories = async () => {
  const db = await getDB();
  return db.memories;
};

export const listMemories = (memories) => {
  if (memories.length === 0) {
    console.log(chalk.yellow("No memories found"));
    return;
  }
  memories.forEach((memory) => {
    console.log("\n");
    console.log("Date Created : ", new Date(memory.id).toLocaleString());
    console.log("Id : ", memory.id);
    console.log("Tags : ", memory.tags || [].join(","));
    console.log("Memory Content :", memory.content);
  });
};

export const findMemories = async (id) => {
  const memories = await getAllmemories();
  const targetMemory = memories.filter((m) => m.id === id);
  if (targetMemory.length === 0) {
    return;
  }
  return targetMemory;
};

export const deleteMemory = async (id) => {
  const memories = await getAllmemories();
  const targetMemory = memories.filter((m) => m.id === id);
  if (targetMemory.length === 0) {
    return;
  }
  return await saveDB({ memories: memories.filter((m) => m.id != id) });
};

export const clearMemories = async () => {
  const data = await getAllmemories();
  if (data.length === 0) {
    console.log(chalk.red("No memories Found"));
    return;
  }
  console.log(chalk.green("All memories deleted"));
  await saveDB({ memories: [] });
};
