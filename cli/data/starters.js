const platforms = ['mobile', 'web', 'electron', 'macos', 'windows'];
const shortenedPlatforms = ['m', 'w', 'e', 'ma', 'wi'];

const longhandSeparated = [
  'Mobile',
  'Mobile Web',
  'Mobile Electron',
  'Mobile Macos',
  'Mobile Windows',
  'Mobile Web Electron',
  'Mobile Web Macos',
  'Mobile Web Windows',
  'Mobile Web Electron Macos',
  'Mobile Web Electron Windows',
  'Mobile Web Macos Windows',
  'Mobile Web Electron Macos Windows',
  'Mobile Electron Macos',
  'Mobile Electron Windows',
  'Mobile Macos Windows',

  'Web',
  'Web Electron',
  'Web Macos',
  'Web Windows',
  'Web Electron Macos',
  'Web Electron Windows',
  'Web Macos Windows',
  'Web Electron Macos Windows',

  'Electron',
  'Electron Macos',
  'Electron Windows',
  'Electron Macos Windows',

  'Macos',
  'Macos Windows',

  'Windows',
];
const shorthand = [
  'm',
  'mw',
  'me',
  'mma',
  'mwi',
  'mwe',
  'mwma',
  'mwwi',
  'mwema',
  'mwewi',
  'mwmawi',
  'mwemawi',
  'mema',
  'mewi',
  'mmawi',

  'w',
  'we',
  'wma',
  'wwi',
  'wema',
  'wewi',
  'wmawi',
  'wemaw',

  'e',
  'ema',
  'ewi',
  'emawi',

  'ma',
  'mawi',

  'wi',
];

module.exports = {
  platforms,
  shortenedPlatforms,
  shorthand,
  longhandSeparated,
};
