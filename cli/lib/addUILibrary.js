const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const findUILibrary = require('./findUILibrary');
const folderExists = require('../utils/folderExists');
const merge = require('merge-package-json');

module.exports = function addUILibrary(library, platforms, name) {
  const uilibrary = findUILibrary(library);

  if (!uilibrary) {
    console.log(
      `${chalk.red.bold(
        'ERROR',
      )}: UI Library is either not valid or not supported. Not setting up, please Try again.`,
    );
    return;
  }

  console.log(chalk.cyan(`Setting up ${uilibrary.name}`));

  const directory = '../../starters/uilibrary/';

  // Copy new Src
  const src = folderExists(`${__dirname}/${directory}${uilibrary.name}/src`);
  if (src) {
    fs.copySync(
      path.resolve(__dirname, `${directory}${uilibrary.name}/src/.`),
      `${name}/src/`,
    );
  }

  // Find platform that exist both for the UI library and included in the setup
  const crossOverPlatforms = uilibrary.platforms.filter(x => {
    return platforms.find(item => item.toLowerCase() == x);
  });

  // handle platform logic
  if (crossOverPlatforms && crossOverPlatforms.length > 0) {
    crossOverPlatforms.forEach(platform => {
      const lowerPlatform = platform.toLowerCase();

      const src = folderExists(
        `${__dirname}/${directory}${uilibrary.name}/${lowerPlatform}`,
      );

      if (src) {
        fs.copySync(
          path.resolve(
            __dirname,
            `${directory}${uilibrary.name}/${lowerPlatform}/.`,
          ),
          `${name}/${lowerPlatform}/`,
        );
      }
    });
  }

  // Copy and merge packagejsons

  const core = path.resolve(
    __dirname,
    `${directory}${uilibrary.name}/packagejson/core.json`,
  );
  const dst = fs.readFileSync(core);
  let newPackage = dst;
  if (crossOverPlatforms && crossOverPlatforms.length > 0) {
    crossOverPlatforms.forEach(platform => {
      const lowerPlatform = platform.toLowerCase();
      const platformJson = path.resolve(
        __dirname,
        `${directory}${uilibrary.name}/packagejson/${lowerPlatform}.json`,
      );

      const dst2 = fs.readFileSync(platformJson);
      newPackage = merge(newPackage, dst2);
    });
  }

  const main = fs.readFileSync(`./${name}/package.json`);

  newPackage = merge(main, newPackage);

  fs.writeFileSync(`${name}/package.json`, newPackage);
};
