const starters = require('../data/starters');

module.exports = function(starter) {
  const shorthandIndex = starters.shorthand.findIndex(
    item => item == starter.toLowerCase(),
  );

  if (shorthandIndex > -1) {
    const platforms = starters.longhandSeparated[shorthandIndex];
    const shorthandStarter = starters.shorthand[shorthandIndex];
    return { starter: shorthandStarter, platforms };
  }

  return false;
};
