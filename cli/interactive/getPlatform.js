module.exports = function getPlatform(name) {
  newLine(1);
  prompt([
    {
      type: "select",
      name: "platform",
      message: "What platform do you want to add? ",
      choices: [
        { name: "Mobile (Android, iOS)", value: "m" },
        { name: "Web", value: "w" },
        { name: "Electron (MacOS, Windows, Linux)", value: "e" }
      ],
      result(value) {
        return this.map(value);
      }
    }
  ])
    .then(answers => {
      const platformArr = Object.values(answers.platform);
      const platformStr = platformArr.join("");
      addPlatform(platformStr);
    })
    .catch(error => {
      return;
    });
};

// Avoid Circular Dependency
const { prompt } = require("enquirer");
const chalk = require("chalk");
const init = require("../commands/init/index");
const addPlatform = require("../commands/addPlatform");
const newLine = require("../console/newLine");
