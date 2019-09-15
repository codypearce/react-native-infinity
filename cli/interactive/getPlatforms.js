const { prompt } = require("enquirer");
const init = require("../commands/init/index");

module.exports = function(name) {
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
    const platformString = platformArr.join("");
    init(name, { starter: platformString });
  });
};
