const fs = require('fs-extra');
const path = require('path');
const merge = require('merge-package-json');
const chalk = require('chalk');

module.exports = function addPlatform(value) {
  const platform = findPlatform(value);

  if (!platform) {
    getPlatform();
    return;
  }

  let addedSoFar = [];

  if (platform == 'mobile') {
    console.log(chalk.cyan('Setting up iOS'));

    if (handleFolderExists('./ios/', 'ios', addedSoFar)) return;
    fs.copySync(
      path.resolve(__dirname, `../../starters/platforms/ios/.`),
      `./ios/`,
    );
    addedSoFar.push('ios');

    console.log(chalk.cyan('Setting up Android'));
    if (handleFolderExists('./android/', 'android', addedSoFar)) return;
    fs.copySync(
      path.resolve(__dirname, `../../starters/platforms/android/.`),
      `./android/`,
    );
    addedSoFar.push('android');
  } else if (platform == 'windows') {
    // No windows files
  } else {
    const lowerPlatform = platform.toLowerCase();
    console.log(chalk.cyan(`Setting up ${platform}`));
    if (handleFolderExists(`./${lowerPlatform}/`, lowerPlatform, addedSoFar))
      return;
    fs.copySync(
      path.resolve(__dirname, `../../starters/platforms/${lowerPlatform}/.`),
      `${lowerPlatform}/`,
    );
    addedSoFar.push(lowerPlatform);
  }

  newLine(1);
  console.log(chalk.cyan(`Merging Package.json`));
  const pathToCurrent = path.resolve(`./package.json`);

  let currentPackageJSON;

  try {
    currentPackageJSON = fs.readFileSync(pathToCurrent);
  } catch (err) {
    // Remove Created Folders
    removePlatformFolder(addedSoFar);
    log.error(
      `Cannnot find your project's package.json, you must be at the root of your current RN project.`,
    );

    newLine(1);

    return;
  }
  let newPackage = currentPackageJSON;
  const directory = '../../starters/packagejson/';

  const corePath = path.resolve(__dirname, `${directory}/core.json`);
  const coreJSON = fs.readFileSync(corePath);
  newPackage = merge(newPackage, coreJSON);

  const pathToPlatformJSON = path.resolve(
    __dirname,
    `${directory}/${platform.toLowerCase()}.json`,
  );
  const platformJSON = fs.readFileSync(pathToPlatformJSON);

  newPackage = merge(newPackage, platformJSON);
  fs.writeFileSync(`./package.json`, newPackage);

  newLine(1);

  packagename();
  horizontalLine(1);

  console.log(chalk.cyan('Get started:'));
  console.log(chalk.cyan('1.'), chalk.blue.bold('npm i'));

  if (platform == 'windows') {
    console.log(
      chalk.cyan(
        'Windows Final Step:',
        chalk.blue.bold(`react-native windows`),
      ),
    );
  }

  newLine(1);
  console.log(
    chalk.cyan(
      "Finally run the command for the platform(s) you'd like to render to:",
    ),
  );

  platformCommand(platform);

  newLine(1);
  horizontalLine(1);
  console.log(
    'Please visit the documentation for more information: https://github.com/codypearce/react-native-infinity',
  );
  horizontalLine(1);
  newLine(1);
};

// Avoid Circular Dependency
const findPlatform = require('../lib/findPlatform');
const newLine = require('../console/newLine');
const horizontalLine = require('../console/horizontalLine');
const packagename = require('../console/packageName');
const platformCommand = require('../console/platformCommand');
const getPlatform = require('../interactive/getPlatform');
const handleFolderExists = require('../lib/handleFolderExists');
const removePlatformFolder = require('../lib/removePlatformFolder');
const log = require('../console/log');
