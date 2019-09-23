const { uilibraries, shortToLongUI } = require('../data/uilibraries');

module.exports = function(uilibrary) {
  let found = uilibraries.find(library => library == uilibrary);

  if (!found) found = shortToLongUI[uilibrary];

  return found;
};
