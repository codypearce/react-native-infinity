#!/usr/bin/env node

const program = require('commander');
const init = require('./commands/init/index');
const list = require('./commands/list');
const addPlatform = require('./commands/addPlatform');

const getName = require('./interactive/getName');
const getPlatforms = require('./interactive/getPlatforms');
const getUILibrary = require('./interactive/getUILibrary');
const getPlatform = require('./interactive/getPlatform');

program
  .command('init [name]')
  .alias('i')
  .description('Initializes project in a new directory with a name')
  .option('-s, --starter [template]', 'Choose a preset starter')
  .option('-ui, --uilibrary [uilibrary]', 'Choose ui library')
  .action(function(name, options) {
    if (!name) {
      getName(options);
    } else if (name && !options.starter) {
      getPlatforms(name);
    } else if (name && options.starter && !options.uilibrary) {
      getUILibrary(name, options);
    } else {
      init(name, options);
    }
  });

program
  .command('add-platform [platform]')
  .alias('ap')
  .description('Adds config for another platform')
  .action(function(platform) {
    if (!platform) {
      getPlatform();
    } else {
      addPlatform(platform);
    }
  });

program
  .command('list')
  .alias('ls')
  .description('Lists possible starters')
  .action(function(options) {
    list(options);
  });

if (process.argv.length < 3) {
  program.help();
}

program.parse(process.argv);
