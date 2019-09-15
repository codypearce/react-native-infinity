module.exports = function init(name, options) {
  const { starter, platforms } = findStarter(options.starter);
  if (starter) {
    handleFound(starter, platforms, name);
  } else {
    handleNotFound(name, options.starter);
  }
};

// Avoid Circular Dependency
const findStarter = require("./findStarter");
const handleFound = require("./handleFound");
const handleNotFound = require("./handleNotFound");
