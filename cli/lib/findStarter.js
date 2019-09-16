const starters = require('../data/starters');

module.exports = function(starter) {
  const longhandIndex = starters.longhand.findIndex(item => item == starter);
  if (longhandIndex > -1) {
    const platforms = starters.longhandSeparated[longhandIndex];

    return { starter, platforms };
  }

  const shorthandIndex = starters.shorthand.findIndex(
    item => item == starter.toLowerCase(),
  );

  if (shorthandIndex > -1) {
    const platforms = starters.longhandSeparated[shorthandIndex];
    const longhandStarter = starters.longhand[shorthandIndex];
    return { starter: longhandStarter, platforms };
  }

  return false;
};
