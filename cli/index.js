#!/usr/bin/env node

const program = require("commander");
const init = require("./commands/init/index");
const list = require("./commands/list");

program
  .command("init <name>")
  .alias("i")
  .description("Initializes project in a new directory with a name")
  .option("-s, --starter <template>", "Choose a preset starter")
  .action(function(name, options) {
    init(name, options);
  });

program
  .command("list")
  .alias("ls")
  .description("Lists possible starters")
  .action(function(options) {
    list(options);
  });

program.parse(process.argv);
