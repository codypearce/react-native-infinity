const platforms = ["mobile", "web", "electron"];
const shortenedPlatforms = ["m", "w", "e"];

const longhand = [
  "mobile",
  "mobileWeb",
  "mobileWebElectron",
  "mobileElectron",
  "web",
  "webElectron",
  "electron"
];
const longhandSeparated = [
  "Mobile",
  "Mobile Web",
  "Mobile Web Electron",
  "Mobile Electron",
  "Web",
  "Web Electron",
  "Electron"
];
const shorthand = ["m", "mw", "mwe", "me", "w", "we", "e"];

module.exports = {
  platforms,
  shortenedPlatforms,
  longhand,
  shorthand,
  longhandSeparated
};
