const fs = require("fs-extra");
const path = require("path");
const merge = require("merge-package-json");
const chalk = require("chalk");

module.exports = function addPlatform(platform) {
  const { starter, platforms } = findStarter(platform);

  if (!starter) {
    getPlatform();
    return;
  }

  if (starter == "mobile") {
    console.log(chalk.cyan("Setting up iOS"));
    fs.copySync(
      path.resolve(__dirname, `../../starters/platforms/ios/.`),
      `./ios/`
    );
    console.log(chalk.cyan("Setting up Android"));
    fs.copySync(
      path.resolve(__dirname, `../../starters/platforms/android/.`),
      `./android/`
    );
  } else {
    console.log(chalk.cyan(`Setting up ${starter}`));
    const copy = fs.copySync(
      path.resolve(__dirname, `../../starters/platforms/${starter}/.`),
      `${starter}/`
    );
  }

  newLine(1);
  console.log(chalk.cyan(`Merging Package.json`));
  const pathToCurrent = path.resolve(`./package.json`);

  let currentPackageJSON;

  try {
    currentPackageJSON = fs.readFileSync(pathToCurrent);
  } catch (err) {
    // Remove Created Folders
    if (starter == "mobile") {
      console.log(chalk.cyan("Removing iOS"));
      fs.removeSync(path.resolve(`./ios/`));
      console.log(chalk.cyan("Removing Android"));
      fs.removeSync(path.resolve(`./android/`));
    } else {
      console.log(chalk.cyan(`Removing ${starter}`));
      fs.removeSync(path.resolve(`./${starter}/`));
    }
    console.log(
      `${chalk.red.bold(
        "ERROR"
      )}: Cannnot find your project's package.json, you must be at the root of your current RN project.`
    );

    newLine(1);

    return;
  }
  let newPackage = currentPackageJSON;

  const directory = "../../starters/packagejson/";
  const pathToPlatformJSON = path.resolve(
    __dirname,
    `${directory}/${starter}.json`
  );
  const platformJSON = fs.readFileSync(pathToPlatformJSON);

  newPackage = merge(newPackage, platformJSON);

  const copyPackageJson = fs.writeFileSync(`./package.json`, newPackage);

  newLine(1);

  packagename();
  horizontalLine(1);

  console.log(chalk.cyan("Get started:"));
  console.log(chalk.cyan("1."), chalk.blue.bold("npm i"));

  if (starter == "mobile") {
    console.log(
      chalk.cyan("2."),
      chalk.blue.bold(`npx react-native-rename ${name}`)
    );
  }
  newLine(1);
  console.log(
    chalk.cyan(
      "Finally run the command for the platform(s) you'd like to render to:"
    )
  );

  platformCommand(starter);

  newLine(1);
  horizontalLine(1);
  console.log(
    "Please visit the documentation for more information: https://github.com/codypearce/react-native-infinity"
  );
  horizontalLine(1);
  newLine(1);
};

// Avoid Circular Dependency
const findStarter = require("../lib/findStarter");
const newLine = require("../console/newLine");
const horizontalLine = require("../console/horizontalLine");
const packagename = require("../console/packageName");
const platformCommand = require("../console/platformCommand");
const getPlatform = require("../interactive/getPlatform");
