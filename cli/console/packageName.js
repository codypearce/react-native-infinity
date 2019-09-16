const chalk = require('chalk');

function packageName() {
  const name = ['REACT', 'NATIVE', 'INFINITY'];
  const colors = [
    '#2ecc71',
    '#3498db',
    '#8e44ad',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#1abc9c',
    '#2980b9',
    '#d35400',
  ];
  let display = '';

  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < name[i].length; j++) {
      display += chalk.hex(colors[j]).bold(name[i][j]);
      if (j !== name[i].length - 1) {
        display += chalk(' ');
      }
    }
    if (i !== name.length - 1) {
      display += chalk('  ');
    }
  }
  console.log(display);
  return;
}

module.exports = packageName;
