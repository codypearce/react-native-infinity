const fs = require('fs-extra');
const path = require('path');
const merge = require('merge-package-json');
const chalk = require('chalk');

module.exports = function addPlatform(platform) {
  const { starter, platforms } = findStarter(platform);

  if (!starter) {
    getPlatform();
    return;
  }

  let addedSoFar = [];
  console.log(platforms);
  if (starter == 'm') {
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
  } else {
    const lowerPlatform = platforms.toLowerCase();
    console.log(chalk.cyan(`Setting up ${platforms}`));
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
    removePlatformFolder(platforms);
    console.log(
      `${chalk.red.bold(
        'ERROR',
      )}: Cannnot find your project's package.json, you must be at the root of your current RN project.`,
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
    `${directory}/${platforms.toLowerCase()}.json`,
  );
  const platformJSON = fs.readFileSync(pathToPlatformJSON);

  newPackage = merge(newPackage, platformJSON);
  fs.writeFileSync(`./package.json`, newPackage);

  newLine(1);

  packagename();
  horizontalLine(1);

  console.log(chalk.cyan('Get started:'));
  console.log(chalk.cyan('1.'), chalk.blue.bold('npm i'));

  newLine(1);
  console.log(
    chalk.cyan(
      "Finally run the command for the platform(s) you'd like to render to:",
    ),
  );

  platformCommand(platforms);

  newLine(1);
  horizontalLine(1);
  console.log(
    'Please visit the documentation for more information: https://github.com/codypearce/react-native-infinity',
  );
  horizontalLine(1);
  newLine(1);
};

// Avoid Circular Dependency
const findStarter = require('../lib/findStarter');
const newLine = require('../console/newLine');
const horizontalLine = require('../console/horizontalLine');
const packagename = require('../console/packageName');
const platformCommand = require('../console/platformCommand');
const getPlatform = require('../interactive/getPlatform');
const handleFolderExists = require('../lib/handleFolderExists');
const removePlatformFolder = require('../lib/removePlatformFolder');
