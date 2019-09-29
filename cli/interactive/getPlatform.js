module.exports = function getPlatform() {
  newLine(1);
  prompt([
    {
      type: 'select',
      name: 'platform',
      message: 'What platform do you want to add? ',
      choices: [
        { name: 'Mobile (Android, iOS)', value: 'mobile' },
        { name: 'Web', value: 'web' },
        { name: 'Electron (MacOS, Windows, Linux)', value: 'electron' },
        { name: 'MacOS (react-native-macos)', value: 'macos' },
        { name: 'Windows (react-native-windows)', value: 'windows' },
      ],
      result(value) {
        return this.map(value);
      },
    },
  ])
    .then(answers => {
      const platformArr = Object.values(answers.platform);
      const platformStr = platformArr.join('');

      addPlatform(platformStr);
    })
    .catch(() => {
      return;
    });
};

// Avoid Circular Dependency
const { prompt } = require('enquirer');
const addPlatform = require('../commands/addPlatform');
const newLine = require('../console/newLine');
