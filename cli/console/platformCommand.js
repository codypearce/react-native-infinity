const chalk = require('chalk');
const fixedWidthCell = require('./fixedWidthCell');
const capitalize = require('../utils/capitalize');

function platformCommand(platform) {
  platform = platform.toLowerCase();

  if (platform == 'mobile') {
    const ios = chalk.cyan(fixedWidthCell(10, 'iOS:'));
    const android = chalk.cyan(fixedWidthCell(10, 'Android:'));

    console.log('  ', ios + npmCommand('ios'));
    console.log('  ', android + npmCommand('android'));
  } else if (platform == 'electron') {
    const platformName = chalk.cyan(
      fixedWidthCell(10, capitalize(platform + ':')),
    );
    console.log('  ', platformName + npmCommand(platform));
    console.log('  ', fixedWidthCell(10, '') + npmCommand('server'));
  } else if (platform == 'macos') {
    const platformName = chalk.cyan(
      fixedWidthCell(10, capitalize(platform + ':')),
    );

    console.log(
      '  ',
      platformName +
        ` Open ${chalk.cyan(
          'macos/MacTest.xcodeproj',
        )} in Xcode and click ${chalk.blue.bold('Run')}`,
    );

    console.log('  ', fixedWidthCell(10, '') + npmCommand(platform));

    console.log(
      '  ',
      fixedWidthCell(10, ' ') +
        ' Please visit react-native-macos docs for more information https://github.com/ptmt/react-native-macos',
    );
  } else {
    const platformName = chalk.cyan(
      fixedWidthCell(10, capitalize(platform + ':')),
    );
    console.log('  ', platformName + npmCommand(platform));
  }
}

function npmCommand(command) {
  return chalk.blue.bold(` npm run ${command.toLowerCase()}`);
}

module.exports = platformCommand;
