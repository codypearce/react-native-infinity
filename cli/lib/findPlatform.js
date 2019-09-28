const starters = require('../data/starters');

module.exports = function(starter) {
  const platform = starters.platforms.find(
    item => item == starter.toLowerCase(),
  );

  return platform;
};
