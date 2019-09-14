const chalk = require("chalk");
const fixedWidthCell = require("./fixedWidthCell");
const capitalize = require("../utils/capitalize");

function platformCommand(platform) {
  if (platform == "Mobile") {
    const ios = chalk.cyan(fixedWidthCell(10, "iOS:"));
    const android = chalk.cyan(fixedWidthCell(10, "Android:"));

    console.log("  ", ios + npmCommand("ios"));
    console.log("  ", android + npmCommand("android"));
  } else if (platform == "Electron") {
    const platformName = chalk.cyan(
      fixedWidthCell(10, capitalize(platform + ":"))
    );
    console.log("  ", platformName + npmCommand(platform));
    console.log("  ", fixedWidthCell(10, "") + npmCommand("server"));
  } else {
    const platformName = chalk.cyan(
      fixedWidthCell(10, capitalize(platform + ":"))
    );
    console.log("  ", platformName + npmCommand(platform));
  }
}

function npmCommand(command) {
  return chalk.blue.bold(` npm run ${command.toLowerCase()}`);
}

module.exports = platformCommand;
