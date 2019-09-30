const chalk = require('chalk');

const log = {};

log.error = function(text) {
  return console.log(`${chalk.red.bold('ERROR')}: ${text}`);
};

module.exports = log;
