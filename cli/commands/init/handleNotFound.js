const chalk = require("chalk");
const newLine = require("../../console/newLine");
const horizontalLine = require("../../console/horizontalLine");
const packagename = require("../../console/packageName");

function handleNotFound(starter) {
  newLine(1);
  packagename();
  newLine(1);
  console.log(
    `${chalk.red.bold("ERROR")}: Cannnot find starter: ${chalk.blue.bold(
      starter
    )}`
  );
  newLine(1);
  console.log(
    "To see a list of possible starters type: ",
    chalk.magenta.bold("react-native-infinity list")
  );
  newLine(1);
  return;
}

module.exports = handleNotFound;
