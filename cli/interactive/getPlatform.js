module.exports = function getPlatform() {
  newLine(1);
  prompt([
    {
      type: 'select',
      name: 'platform',
      message: 'What platform do you want to add? ',
      choices: [
        { name: 'Mobile (Android, iOS)', value: 'm' },
        { name: 'Web', value: 'w' },
        { name: 'Electron (MacOS, Windows, Linux)', value: 'e' },
        { name: 'MacOs (react-native-macos)', value: 'ma' },
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
