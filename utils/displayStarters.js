const starters = require("./starters");
const chalk = require("chalk");

module.exports = function(options) {
  console.log("");
  console.log("All possible Starters");
  console.log("----------------------------------------------------------");
  console.log("");
  console.log(
    `${chalk.magenta(fixedWidthConsole(20, "Longform"))} ${chalk.blue(
      fixedWidthConsole(14, "Shorthand")
    )} ${chalk.cyan(fixedWidthConsole(19, "Platforms"))} `
  );
  console.log("");
  for (let i = 0; i < starters.longhand.length; i++) {
    console.log(
      chalk.magenta(fixedWidthConsole(20, starters.longhand[i])),
      chalk.blue(fixedWidthConsole(14, starters.shorthand[i])),
      chalk.cyan(fixedWidthConsole(20, starters.longhandSeparated[i]))
    );
  }
  console.log("");
  console.log("");
  console.log(
    "Usage:",
    chalk.blue.bold(
      "react-native-infinity init AwesomeProject -s mobileWebElectron"
    )
  );
  console.log("");
  console.log(
    "This will create a new project that is set up to render to Mobile, Web, and Electron with the name AwesomeProject"
  );
  console.log("");
};

function fixedWidthConsole(len, str) {
  const difference = len - str.length;
  return str + Array(difference).join(" ");
}
