const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

function removePlatformFolder(platform) {
  if (platform && platform.toLowerCase() == "mobile") {
    console.log(chalk.cyan("Removing iOS"));
    fs.removeSync(path.resolve(`./ios/`));
    console.log(chalk.cyan("Removing Android"));
    fs.removeSync(path.resolve(`./android/`));
  } else {
    console.log(chalk.cyan(`Removing ${platform}`));
    fs.removeSync(path.resolve(`./${platform}/`));
  }
}

module.exports = removePlatformFolder;
