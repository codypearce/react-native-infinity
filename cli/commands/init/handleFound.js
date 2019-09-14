const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const newLine = require("../../console/newLine");
const horizontalLine = require("../../console/horizontalLine");
const packagename = require("../../console/packageName");
const platformCommand = require("../../console/platformCommand");

function handleFound(starter, platforms, name) {
  // Copy Core logic
  console.log(chalk.cyan("Setting up Core"));
  const copy = fs.copySync(
    path.resolve(__dirname, `../../../starters/core/.`),
    name
  );

  // Copy Platform logic
  const arr = platforms.split(" ");
  arr.forEach(platform => {
    const lowerPlatform = platform.toLowerCase();
    if (lowerPlatform == "mobile") {
      console.log(chalk.cyan("Setting up iOS"));
      fs.copySync(
        path.resolve(__dirname, `../../../starters/platforms/ios/.`),
        `${name}/ios/`
      );
      console.log(chalk.cyan("Setting up Android"));
      fs.copySync(
        path.resolve(__dirname, `../../../starters/platforms/android/.`),
        `${name}/android/`
      );
    } else {
      console.log(chalk.cyan(`Setting up ${platform}`));
      const copy = fs.copySync(
        path.resolve(
          __dirname,
          `../../../starters/platforms/${lowerPlatform}/.`
        ),
        `${name}/${lowerPlatform}/`
      );
    }
  });

  newLine(1);

  packagename();
  horizontalLine(1);
  console.log(chalk.cyan("Get started:"));
  console.log(chalk.cyan("1."), chalk.blue.bold(`cd ${name}`));
  console.log(chalk.cyan("2."), chalk.blue.bold("npm i"));
  const platformArr = platforms.split(" ");

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
