const chalk = require("chalk");
const fixedWidthCell = require("./fixedWidthCell");
const capitalize = require("../utils/capitalize");

function platformCommand(platform) {
  let platformName = chalk.cyan(fixedWidthCell(10, capitalize(platform + ":")));
  if (platform == "ios") {
    platformName = chalk.cyan(fixedWidthCell(10, "iOS:"));
  }
  const npmCommand = chalk.blue.bold(` npm run ${platform}`);

  console.log("  ", platformName + npmCommand);
}

module.exports = platformCommand;
