const starters = require("../data/starters");
const chalk = require("chalk");
const newLine = require("../console/newLine");
const horizontalLine = require("../console/horizontalLine");

function list(options) {
  newLine(1);
  console.log("All possible Starters");
  horizontalLine(1);
  newLine(1);
  console.log(
    `${chalk.magenta(fixedWidthConsole(20, "Longform"))} ${chalk.blue(
      fixedWidthConsole(14, "Shorthand")
    )} ${chalk.cyan(fixedWidthConsole(19, "Platforms"))} `
  );
  newLine(1);
  for (let i = 0; i < starters.longhand.length; i++) {
    console.log(
      chalk.magenta(fixedWidthConsole(20, starters.longhand[i])),
      chalk.blue(fixedWidthConsole(14, starters.shorthand[i])),
      chalk.cyan(fixedWidthConsole(20, starters.longhandSeparated[i]))
    );
  }
  newLine(2);

  console.log(
    "Usage:",
    chalk.blue.bold(
      "react-native-infinity init AwesomeProject -s mobileWebElectron"
    )
  );
  newLine(1);
  console.log(
    "This will create a new project that is set up to render to Mobile, Web, and Electron with the name AwesomeProject"
  );
  newLine(1);
}

function fixedWidthConsole(len, str) {
  const difference = len - str.length;
  return str + Array(difference).join(" ");
}

module.exports = list;
