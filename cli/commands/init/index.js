const findStarter = require("./findStarter");
const handleFound = require("./handleFound");
const handleNotFound = require("./handleNotFound");

function init(name, options) {
  const starter = findStarter(options.starter);
  if (starter) {
    handleFound(starter, name);
  } else {
    handleNotFound(options.starter);
  }
}

module.exports = init;
