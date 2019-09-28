const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const newLine = require('../../console/newLine');
const horizontalLine = require('../../console/horizontalLine');
const packagename = require('../../console/packageName');
const platformCommand = require('../../console/platformCommand');
const createPackageJson = require('../../lib/createPackageJson');
const handleFolderExists = require('../../lib/handleFolderExists');
const addUILibrary = require('../../lib/addUILibrary');

function handleFound(starter, platforms, name, uilibrary) {
  if (handleFolderExists(`./${name}/`, name, [])) return;

  // Copy Core logic
  console.log(chalk.cyan('Setting up Core'));
  try {
    fs.copySync(path.resolve(__dirname, `../../../starters/core/.`), name);
  } catch (err) {
    console.log('core error', err);
  }

  // Copy Platform logic
  const arr = platforms.split(' ');
  arr.forEach(platform => {
    const lowerPlatform = platform.toLowerCase();
    if (lowerPlatform == 'mobile') {
      console.log(chalk.cyan('Setting up iOS'));
      try {
        fs.copySync(
          path.resolve(__dirname, `../../../starters/platforms/ios/.`),
          `${name}/ios/`,
        );
      } catch (err) {
        console.log('ios error', err);
      }

      console.log(chalk.cyan('Setting up Android'));
      fs.copySync(
        path.resolve(__dirname, `../../../starters/platforms/android/.`),
        `${name}/android/`,
      );
    } else {
      console.log(chalk.cyan(`Setting up ${platform}`));
      fs.copySync(
        path.resolve(
          __dirname,
          `../../../starters/platforms/${lowerPlatform}/.`,
        ),
        `${name}/${lowerPlatform}/`,
      );
    }
  });

  // Copy and Merge JSON
  console.log(chalk.cyan(`Merging Package.json`));
  const packageJson = createPackageJson(arr);
  fs.writeFileSync(`${name}/package.json`, packageJson);

  // UI Library
  addUILibrary(uilibrary, arr, name);

  newLine(1);
  packagename();
  horizontalLine(1);
  console.log(chalk.cyan('Get started:'));
  console.log(chalk.cyan('1.'), chalk.blue.bold(`cd ${name}`));
  console.log(chalk.cyan('2.'), chalk.blue.bold('npm i'));
  const platformArr = platforms.split(' ');

  if (platformArr.includes('Mobile') || platformArr.includes('Macos')) {
    console.log(
      chalk.cyan('3.'),
      chalk.blue.bold(`npx react-native-rename ${name}`),
    );
  }

  if (uilibrary == 'm' && platformArr.find(item => item == 'Mobile')) {
    console.log(
      chalk.cyan(
        'Vector Icons Extra:',
        chalk.blue.bold(
          `Follow instructions for Android and iOS: https://github.com/oblador/react-native-vector-icons`,
        ),
      ),
    );
  }

  if (platformArr.find(item => item == 'Windows')) {
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

  platformArr.map(item => {
    platformCommand(item);
  });

  newLine(1);
  horizontalLine(1);
  console.log(
    'Please visit the documentation for more information: https://github.com/codypearce/react-native-infinity',
  );
  horizontalLine(1);
  newLine(1);
}

module.exports = handleFound;
