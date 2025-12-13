import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getAllstories, listStories, newStory } from "./stories.js";

yargs(hideBin(process.argv))
  .command(
    "new <story>",
    "create a new story",
    (yargs) => {
      return yargs.positional("story", {
        description: "The content of the story you want to wrrite",
        type: "string",
      });
    },
    async (argv) => {
      const tags = argv.tags ? argv.tags.split(",") : [];
      const story = await newStory(argv.story, tags);
      console.log("Story added Successfully : \n", story);
    }
  )
  .option("tags", {
    alias: "t",
    type: "string",
    description: "Tags to add to your story",
  })
  .command(
    "all",
    "get all stories",
    () => {},
    async (argv) => {
      const stories = await getAllstories();
      listStories(stories)
    }
  )
  .demandCommand(1)
  .parse();
