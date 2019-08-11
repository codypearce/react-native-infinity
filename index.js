#!/usr/bin/env node

const program = require("commander");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const getStarter = require("./utils/getStarter");

program
  .command("init <name>")
  .alias("i")
  .description("Initializes project in a new directory with a name")
  .option("-s, --starter <template>", "Choose a preset starter")
  .action(function(name, options) {
    cloneContent(name, options);
  });

program.parse(process.argv);

function cloneContent(name, options) {
  const starter = getStarter(options.starter);
  if (starter) {
    const copy = fs.copySync(
      path.resolve(__dirname, `./starters/${starter}/.`),
      name
    );
  } else {
    console.log(`ERROR: Cannnot find starter: ${options.starter}`);
    return;
  }

  console.log("");
  console.log("----------------------------------------------------------");
  console.log(
    `${chalk.cyan.bold("React")} ${chalk.magenta.bold(
      "Native"
    )} ${chalk.green.bold("Inifity")}`
  );
  console.log("----------------------------------------------------------");
  console.log(chalk.cyan("Get started by:"));
  console.log(chalk.cyan("1."), chalk.blue.bold(`cd ${name}`));
  console.log(chalk.cyan("2."), chalk.blue.bold("npm i"));
  console.log(
    chalk.cyan(
      "3. Run the command for the platform(s) you'd like to render to:"
    )
  );
  console.log("    ", chalk.cyan("3.1 Web:") + chalk.blue.bold(" npm run web"));
  console.log("    ", chalk.cyan("3.2 iOS:") + chalk.blue.bold(" npm run ios"));
  console.log(
    "    ",
    chalk.cyan("3.3 Android:") + chalk.blue.bold(" npm run android")
  );

  console.log("----------------------------------------------------------");
  console.log(
    "Please visit the documentation for more information: https://github.com/codypearce/react-native-infinity"
  );
  console.log("----------------------------------------------------------");
  console.log("");
}
