const { prompt } = require("enquirer");
const chalk = require("chalk");
const init = require("../commands/init/index");
const newLine = require("../console/newLine");

module.exports = function getPlatforms(name) {
  prompt([
    {
      type: "multiselect",
      name: "platforms",
      message:
        "What platforms will your app support? (Spacebar to select, Enter to Continue)",
      choices: [
        { name: "Mobile (Android, iOS)", value: "m" },
        { name: "Web", value: "w" },
        { name: "Electron (MacOS, Windows, Linux)", value: "e" },
        ""
      ],
      result(value) {
        return this.map(value);
      }
    }
  ]).then(answers => {
    const platformArr = Object.values(answers.platforms);
    if (platformArr && platformArr.length < 1) {
      newLine(2);
      console.log(
        chalk.red.bold("You must choose at least one platform to support")
      );

      newLine(2);
      getPlatforms(name);
      return;
    }
    const platformString = platformArr.join("");
    init(name, { starter: platformString });
  });
};
