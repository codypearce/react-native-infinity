<h1 align="center">React Native Infinity</h1>


[![Netlify Status](https://api.netlify.com/api/v1/badges/671f47a2-1863-4a7e-aaea-d07e8907d816/deploy-status)](https://app.netlify.com/sites/silly-sinoussi-9c57cb/deploys) ![npm](https://img.shields.io/npm/v/react-native-infinity)

<p align="center">
<b>CLI that generates React Native projects targeting any combination of platforms</b><br>
<sub>iOS, Android, Web, Electron, Windows, MacOS</sub>
</p>


You can use the [interactive](https://www.reactnativeinfinity.com/) tool in the docs to generate the CLI command you need, or simply use `npx react-native-infinity init` to use the CLI interactive tool.

## Features
* __Multi-Platform__ - Choose any combination of 6 platforms to target (iOS, Android, Web, Electron, Windows, MacOS)
* __Add Platform__ - Can add another platform anytime with `add-platform` command
* __UI Library__ - Add cross-platform UI libraries (Material Bread, UI Kitten)
* __Interactive GUI__ - Online GUI to select platforms and libraries to get started
* __Interactive CLI__ - Can select platforms and libraries to get started


## Table of Contents

- [CLI](#cli)
  - [Installation](#installation)
  - [`init`](#init)
  - [`list`](#list)
- [Starter](#starter)
  - [Structure](#structure)
  - [Web](#web)
  - [Electron](#electron)
  - [Android](#android)
  - [ios](#ios)
      


# CLI

## Installation 

You can install the project globally, but the preferred method is to simply use the`npx` without installing anything.

Install globally: `npm install react-native-infinity -g`

Using `npx`: `npx react-native-infinity <command>`

## `init`

`init` is used as follows: `init <name> --starter <platforms>` where <name> is the name of your application and <platforms> indicates which platforms should be supported.

For example to generate a project with name AwesomeProject that targets Android, iOS, and Web, run:

```
npx react-native-infinity init AwesomeProject --starter mw
```
`mw` is short-hand keyword to indicate you want to build a project that supports Mobile and Web. Platform keywords can be found by running the `list` command and are displayed below.

## `list`

`npx react-native-infinity list` lists all supported platforms with the name you pass into `--starter`

| Long Name         | Short Name | Platforms                |
|-------------------|------------|--------------------------|
| mobile            | m          | Android iOS              |
| mobileWeb         | mw         | Android iOS Web          |
| mobileWebElectron | mwe        | Android iOS Web Electron |
| mobileElectron    | me         | Android iOS Electron     |
| web               | w          | Web                      |
| webElectron       | we         | Web Electron             |
| electron          | e          | Electron                 |


# Starter
This starter contains a bare bones configuration for rendering on each platform.

## Structure
React Native separates application code into `src` and platform configuration into `android` and `ios`. React Native Infinity extends this idea to more platforms. All application code stil lives in `src` while each platform `ios`, `android`, `web`, `electron` has it's own folder that contains configurations, including `webpack` config for each platform. Below are commands that run

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



