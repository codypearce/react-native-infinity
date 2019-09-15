const { prompt } = require("enquirer");
const chalk = require("chalk");
const init = require("../commands/init/index");
const newLine = require("../console/newLine");
const getPlatforms = require("./getPlatforms");

module.exports = function getName(options) {
  prompt({
    type: "input",
    name: "projectName",
    message: "Name of the Project:",
    initial: "AwesomeProject"
  })
    .then(answers => {
      if (answers.projectName && answers.projectName.trim().length < 1) {
        newLine(1);
        console.log(chalk.red.bold("Name cannot be blank or just spaces."));
        newLine(1);
        getName(options);
      } else if (!options.starter) {
        getPlatforms(answers.projectName.trim());
      } else {
        init(answers.projectName.trim(), options);
      }
    })
    .catch(error => {
      return;
    });
};
