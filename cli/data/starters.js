const platforms = ['mobile', 'web', 'electron', 'macos'];
const shortenedPlatforms = ['m', 'w', 'e', 'ma'];

const longhand = [
  'mobile',
  'mobileWeb',
  'mobileWebElectron',
  'mobileElectron',
  'mobileMacos',
  'mobileWebMacos',
  'mobileElectronMacos',
  'mobileWebElectronMacos',
  'web',
  'webElectron',
  'webMacos',
  'webElectronMacos',
  'electron',
  'electronMacos',
  'macos',
];
const longhandSeparated = [
  'Mobile',
  'Mobile Web',
  'Mobile Web Electron',
  'Mobile Electron',
  'Mobile Macos',
  'Mobile Web Macos',
  'Mobile Electron Macos',
  'Mobile Web Electron Macos',
  'Web',
  'Web Electron',
  'Web Macos',
  'Web Electron Macos',
  'Electron',
  'Electron Macos',
  'Macos',
];
const shorthand = [
  'm',
  'mw',
  'mwe',
  'me',
  'mma',
  'mwma',
  'mema',
  'mwema',
  'w',
  'we',
  'wma',
  'wema',
  'e',
  'ema',
  'ma',
];

module.exports = {
  platforms,
  shortenedPlatforms,
  longhand,
  shorthand,
  longhandSeparated,
};
