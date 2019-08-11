const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const newLine = require("../../console/newLine");
const horizontalLine = require("../../console/horizontalLine");
const packagename = require("../../console/packageName");
const platformCommand = require("../../console/platformCommand");

function handleFound(starter, name) {
  const copy = fs.copySync(
    path.resolve(__dirname, `../../../starters/${starter.starter}/.`),
    name
  );

  newLine(1);

  packagename();
  horizontalLine(1);
  console.log(chalk.cyan("Get started:"));
  console.log(chalk.cyan("1."), chalk.blue.bold(`cd ${name}`));
  console.log(chalk.cyan("2."), chalk.blue.bold("npm i"));
  const platformArr = starter.platforms.split(" ");

  if (platformArr.find(item => item == "Mobile")) {
    console.log(
      chalk.cyan("3."),
      chalk.blue.bold(`npx react-native-rename ${name}`)
    );
  }
  newLine(1);
  console.log(
    chalk.cyan(
      "Finally run the command for the platform(s) you'd like to render to:"
    )
  );

  platformArr.map(item => {
    platformCommand(item);
  });

  newLine(1);
  horizontalLine(1);
  console.log(
    "Please visit the documentation for more information: https://github.com/codypearce/react-native-infinity"
  );
  horizontalLine(1);
  newLine(1);
}

module.exports = handleFound;
