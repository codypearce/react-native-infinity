module.exports = function getUILibrary(name, options) {
  newLine(1);
  prompt([
    {
      type: 'select',
      name: 'uilibrary',
      message: 'UI Library? ',
      choices: [
        { name: 'None', value: '' },
        { name: 'Material Bread', value: 'm' },
        { name: 'UI Kitten', value: 'k' },
      ],
      result(value) {
        return this.map(value);
      },
    },
  ])
    .then(answers => {
      const arr = Object.values(answers.uilibrary);
      const str = arr.join('');

      init(name, { starter: options.starter, uilibrary: str });
    })
    .catch(() => {
      return;
    });
};

// Avoid Circular Dependency
const { prompt } = require('enquirer');
const init = require('../commands/init/index');
const newLine = require('../console/newLine');
