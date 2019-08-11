const starters = require("../data/starters");
const chalk = require("chalk");
const newLine = require("../console/newLine");
const horizontalLine = require("../console/horizontalLine");
const fixedWidthCell = require("../console/fixedWidthCell");

function list(options) {
  newLine(1);
  console.log("All possible Starters");
  horizontalLine(1);
  newLine(1);
  console.log(
    `${chalk.magenta(fixedWidthCell(20, "Longform"))} ${chalk.blue(
      fixedWidthCell(14, "Shorthand")
    )} ${chalk.cyan(fixedWidthCell(19, "Platforms"))} `
  );
  newLine(1);
  for (let i = 0; i < starters.longhand.length; i++) {
    console.log(
      chalk.magenta(fixedWidthCell(20, starters.longhand[i])),
      chalk.blue(fixedWidthCell(14, starters.shorthand[i])),
      chalk.cyan(fixedWidthCell(20, starters.longhandSeparated[i]))
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

module.exports = list;
