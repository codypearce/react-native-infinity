const chalk = require('chalk');
const newLine = require('../../console/newLine');
const packagename = require('../../console/packageName');
const getPlatforms = require('../../interactive/getPlatforms');
const log = require('../../console/log');

function handleNotFound(name, starter) {
  newLine(1);
  packagename();
  newLine(2);
  log.error(`Cannnot find starter: ${chalk.blue.bold(starter)}`);
  newLine(1);
  console.log(chalk.cyan('Please select platforms below:'));
  getPlatforms(name);
  return;
}

module.exports = handleNotFound;
