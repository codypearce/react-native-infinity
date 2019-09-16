const fs = require('fs-extra');
const path = require('path');
const merge = require('merge-package-json');

module.exports = function(platforms) {
  const directory = '../../starters/packagejson/';
  const core = path.resolve(__dirname, `${directory}/core.json`);
  const dst = fs.readFileSync(core);
  let newPackage = dst;

  platforms.forEach(platform => {
    const lowerPlatform = platform.toLowerCase();
    const platformJson = path.resolve(
      __dirname,
      `${directory}/${lowerPlatform}.json`,
    );

    const dst2 = fs.readFileSync(platformJson);
    newPackage = merge(newPackage, dst2);
  });

  return newPackage;
};
