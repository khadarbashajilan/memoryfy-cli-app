import yargs from "yargs";
import chalk from "chalk";
import figlet from "figlet";
import { hideBin } from "yargs/helpers";
import {
  clearMemories,
  deleteMemory,
  findMemories,
  getAllmemories,
  listMemories,
  newMemory,
} from "./memories.js";

console.log(chalk.blue(figlet.textSync('Memory Keeper', { font: 'small' })));

yargs(hideBin(process.argv))
  .command(
    "new <memory>",
    "Capture a new memory",
    (yargs) => {
      return yargs.positional("memory", {
        description: "The memory you want to capture",
        type: "string",
      });
    },
    async (argv) => {
      const tags = argv.tags ? argv.tags.split(",") : [];
      const memory = await newMemory(argv.memory, tags);
      console.log(chalk.green("Memory captured successfully:"), memory);
    }
  )
  .option("tags", {
    alias: "t",
    type: "string",
    description: "Tags to categorize your memory",
  })
  .command(
    "all",
    "Recall all memories",
    () => {},
    async () => {
      const memories = await getAllmemories();
      listMemories(memories);
    }
  )
  .command(
    "find <id>",
    "Find memories by id",
    (yargs) => {
      return yargs.positional("id", {
        describe: "Id to find a memory",
        type: "number",
      });
    },
    async (argv) => {
      const targetMemory = await findMemories(argv.id);
      if (!targetMemory) {
        console.log(chalk.red("Memory not Found"));
        return;
      }
      listMemories(targetMemory);
    }
  )
  .command(
    "delete <id>",
    "delete a memory",
    (yargs) => {
      return yargs.positional("id", {
        describe: "Id to delete a memory",
        type: "number",
      });
    },
    async (argv) => {
      const erasedMemory = await deleteMemory(argv.id);
      if (!erasedMemory) {
        console.log(chalk.yellow("Memory not found"));
        return;
      }
      console.log(chalk.red("Memory erased successfully"));
    }
  )
  .command(
    "clear",
    "delete all the memories",
    () => {},
    async () => {
      await clearMemories();
      console.log(chalk.red("All memories have been erased"));
    }
  )
  .demandCommand(1)
  .parse();
