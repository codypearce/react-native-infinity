<h1 align="center">React Native Infinity</h1>


<p align="center">
<img src="https://api.netlify.com/api/v1/badges/671f47a2-1863-4a7e-aaea-d07e8907d816/deploy-status" alt="Netlify Status" />
<img src="https://img.shields.io/npm/v/react-native-infinity" alt="NPM" />
 </p>     

<p align="center">
<b>CLI that generates React Native projects targeting any combination of platforms</b><br>
<sub>iOS, Android, Web, Electron, Windows, MacOS</sub>
</p>

<p align="center">

<img src="https://raw.githubusercontent.com/codypearce/react-native-infinity/master/media/init-final.gif" alt="Init Command" width="750">
</p>

You can use the [interactive](https://www.reactnativeinfinity.com/) tool in the docs to generate the CLI command you need, or simply use `npx react-native-infinity init` to use the CLI interactive tool.

<br>

## Features
* __Multi-Platform__ - Choose any combination of 6 platforms to target (iOS, Android, Web, Electron, Windows, MacOS)
* __Add Platform__ - Add another platform anytime with `add-platform` command
* __UI Library__ - Add cross-platform UI libraries (Material Bread, UI Kitten)
* __Interactive GUI__ - Online GUI to select platforms and libraries to get started
* __Interactive CLI__ - Select platforms and libraries by answers questions in your terminal

<br>

## Getting Started

- [Installation](#installation)
- [init](#-init)
- [add-platform](#-add-platform)
- [list](#-list)
- [Project](#project)
  - [Structure](#structure)
  - [Web](#web)
  - [Electron](#electron)
  - [Android](#android)
  - [ios](#ios)
      
<br>


## Installation 

You can install the project globally or use `npx`:

Install globally
```
$  npm install react-native-infinity -g
```

Using `npx`: 
```
$  npx react-native-infinity <command>
```

<br>

## ❯ init

`init <name>` where <name> is an optional paramter that indicates the name of the folder and app. Additional options are passed when using the generated GUI tool.

<p align="center">

<img src="https://raw.githubusercontent.com/codypearce/react-native-infinity/master/media/init-name.gif" alt="Init Command" width="750">
</p>


<br>

## ❯ add-platform

`add-platform` command adds a platform after project initialization. Pass in a single platform from those listed in the `list` section

```
npx react-native-infinity add-platform electron
```

<br>

## ❯ list

`npx react-native-infinity list` lists all supported platforms with the name you pass into `--starter`

<p align="center">

<img src="https://raw.githubusercontent.com/codypearce/react-native-infinity/master/media/list.gif" alt="Init Command" width="750">
</p>

<br>


# Project
This starter contains a bare bones configuration for rendering on each platform.

## Structure
React Native separates application code into `src` and platform configuration into `android` and `ios`. React Native Infinity extends this idea to more platforms. All application code lives in `src` while each platform `ios`, `android`, `web`, `electron`, `macos`, `windows` has it's own folder that contains configurations, including `webpack` config for each platform. 

## Web
React Native on the web is supported by [react-native-web](https://github.com/necolas/react-native-web), please check the documentation to learn more.

```
npm run web
```

Config: `./web/webpack.config.js`. Config sets up an alias for `react-native` to `react-native-web`.

HTML Entry: `./web/index.html`. 

Entry file is `./web/index.js`.

Runs on `localhost:8080`.



```
npm run build-web
```
Uses `./web/webpack.config` to build a production web build to `./web/dist`.

## Electron
Electron with React requires two commands to run and uses [react-native-web](https://github.com/necolas/react-native-web)

```
npm run electron
``` 
Starts the Electron window using config `./electron/main.js` and 

```
npm run server
``` 
Runs react in the electron window using config `./electron/webpack.config.js`.

HTML Entry: `./electron/index.html`

Entry File is `./electron/renderer.js`


## Android
```
npm run android
```
Simply runs `react-native run-android`, read the React Native docs for more information

## iOS
```
npm run ios
```
Simply runs `react-native run-ios`, read the React Native docs for more information



