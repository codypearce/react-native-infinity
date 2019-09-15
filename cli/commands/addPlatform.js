const fs = require("fs-extra");
const path = require("path");
const merge = require("merge-package-json");

module.exports = function addPlatform(platform) {
  const { starter, platforms } = findStarter(platform);
  console.log(starter, platforms);

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
    console.log(
      `${chalk.red.bold(
        "ERROR"
      )}: Cannnot find your project's package.json, please go to the root of your poject and try again.`
    );
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
};

// Avoid Circular Dependency
const findStarter = require("../lib/findStarter");
const chalk = require("chalk");
const newLine = require("../console/newLine");
