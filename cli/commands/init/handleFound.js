const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const newLine = require("../../console/newLine");
const horizontalLine = require("../../console/horizontalLine");
const packagename = require("../../console/packageName");

function handleFound(starter, name) {
  const copy = fs.copySync(
    path.resolve(__dirname, `../../../starters/${starter}/.`),
    name
  );

  newLine(1);

  packagename();
  horizontalLine(1);
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

  horizontalLine(1);
  console.log(
    "Please visit the documentation for more information: https://github.com/codypearce/react-native-infinity"
  );
  horizontalLine(1);
  newLine(1);
}

module.exports = handleFound;
