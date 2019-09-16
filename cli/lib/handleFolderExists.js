const chalk = require('chalk');
const folderExists = require('../utils/folderExists');
const removePlatformFolder = require('./removePlatformFolder');

function handleFolderExists(pathToFolder, name, platformsAdded) {
  const exists = folderExists(pathToFolder, name);
  if (exists) {
    console.log(
      `${chalk.red.bold(
        'ERROR',
      )}: ${name} folder already exists, not overwriting. Maybe ${name} is already set up? Reverting changes so far.`,
    );
    const isArray = Array.isArray(platformsAdded);
    if (isArray && platformsAdded.length > 0) {
      platformsAdded.forEach(item => {
        removePlatformFolder(item);
      });
    } else if (isArray && platformsAdded.length < 1) {
      return true;
    } else {
      removePlatformFolder(platformsAdded);
    }

    return true;
  }

  return false;
}

module.exports = handleFolderExists;
