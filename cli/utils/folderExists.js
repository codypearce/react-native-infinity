const fs = require('fs-extra');
const path = require('path');

function folderExists(pathToFolder) {
  try {
    const exists = fs.existsSync(path.resolve(pathToFolder));

    return exists;
  } catch (err) {
    return false;
  }
}

module.exports = folderExists;
