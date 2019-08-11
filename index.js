const program = require("commander");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

program.option("-c, --copy", "copy");

program.parse(process.argv);

if (program.copy) {
  const copy = fs.copySync(path.resolve(__dirname, "./starters/web/."), "test");
  console.log("");
  console.log("----------------------------------------------------------");
  console.log(
    `${chalk.cyan.bold("React")} ${chalk.magenta.bold(
      "Native"
    )} ${chalk.green.bold("Inifity")}`
  );
  console.log("----------------------------------------------------------");
  console.log(chalk.cyan("Get started by:"));
  console.log(chalk.cyan("1."), chalk.blue.bold("cd test"));
  console.log(chalk.cyan("2."), chalk.blue.bold("npm i"));
  console.log(
    chalk.cyan(
      "3. Run the command for the platform(s) you'd like to render to:"
    )
  );
  console.log("    ", chalk.cyan("3.1 Web:") + chalk.blue.bold(" npm run web"));
  console.log("    ", chalk.cyan("3.2 iOS:") + chalk.blue.bold(" npm run ios"));
  console.log(
    "    ",
    chalk.cyan("3.3 Android:") + chalk.blue.bold(" npm run android")
  );

  console.log("----------------------------------------------------------");
  console.log(
    "Please visit the documentation for more information: https://github.com/codypearce/react-native-infinity"
  );
  console.log("----------------------------------------------------------");
  console.log("");
}
