function fixedWidthCell(len, str) {
  const difference = len - str.length;

  return str + Array(difference).join(' ');
}

module.exports = fixedWidthCell;
