const starters = require("../data/starters");
const convertShorthand = require("./convertShorthand");

module.exports = function(starter) {
  if (starters.longhand.find(item => item == starter)) return starter;

  if (starters.shorthand.find(item => item == starter.toLowerCase()))
    return convertShorthand(starter);

  return false;
};
