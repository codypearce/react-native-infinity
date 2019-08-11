const starters = require("../data/starters");

module.exports = function(starter) {
  const index = starters.shorthand.findIndex(
    item => item == starter.toLowerCase()
  );
  return starters.longhand[index];
};
