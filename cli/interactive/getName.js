const { prompt } = require("enquirer");
const init = require("../commands/init/index");
const getPlatforms = require("./getPlatforms");

module.exports = function getName(options) {
  prompt({
    type: "input",
    name: "projectName",
    message: "Name of the Project:",
    initial: "AwesomeProject"
  }).then(answers => {
    if (!options.starter) {
      getPlatforms(answers.projectName);
    } else {
      init(answers.projectName, options);
    }
  });
};
