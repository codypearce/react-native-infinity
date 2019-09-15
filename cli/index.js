#!/usr/bin/env node

const program = require("commander");
const { prompt } = require("enquirer");
const init = require("./commands/init/index");
const list = require("./commands/list");

function getName(options) {
  prompt({
    type: "input",
    name: "projectName",
    message: "Name of the Project:",
    initial: "AwesomeProject"
  }).then(answers => {
    console.info("Project Name:", answers.projectName);
    if (!options.starter) {
      getPlatforms(answers.projectName);
    } else {
      init(answers.projectName, options);
    }
  });
}

function getPlatforms(name) {
  prompt([
    {
      type: "multiselect",
      name: "platforms",
      message:
        "What platforms will your app support? (Spacebar to select, Enter to Continue)",
      choices: [
        { name: "Mobile (Android, iOS)", value: "m" },
        { name: "Web", value: "w" },
        { name: "Electron (MacOS, Windows, Linux)", value: "e" },
        ""
      ],
      result(value) {
        return this.map(value);
      }
    }
  ]).then(answers => {
    const platformArr = Object.values(answers.platforms);
    const platformString = platformArr.join("");
    init(name, { starter: platformString });
  });
}

program
  .command("init [name]")
  .alias("i")
  .description("Initializes project in a new directory with a name")
  .option("-s, --starter [template]", "Choose a preset starter")
  .action(function(name, options) {
    if (!name) {
      getName(options);
    } else {
      init(name, options);
    }
  });

program
  .command("list")
  .alias("ls")
  .description("Lists possible starters")
  .action(function(options) {
    list(options);
  });

if (process.argv.length < 3) {
  program.help();
}

program.parse(process.argv);
