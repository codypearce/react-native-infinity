# React Native Inifinity
[![Netlify Status](https://api.netlify.com/api/v1/badges/671f47a2-1863-4a7e-aaea-d07e8907d816/deploy-status)](https://app.netlify.com/sites/silly-sinoussi-9c57cb/deploys) ![npm](https://img.shields.io/npm/v/react-native-infinity)

React Native Inifinity is a CLI that generates React Native starters for all platforms your app needs to support.

You can use the [interactive](https://www.reactnativeinfinity.com/) tool in the docs to generate the CLI command you need, or follow the CLI docs below to customize your own command. 

## Table of Contents

- [CLI](#cli)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Platforms](#platforms)
- [Starter](#starter)
  - [Commands](#commands)


## CLI

### Installation 

You can install the project globally, but the preferred method is to simply use the`npx` without installing anything.

Install globally: `npm install react-native-infinity -g`
Using `npx`: `npx react-native-infinity <command>`

### init

`init` is used as follows: `init <name> --starter <platforms>` where <name> is the name of your application and <platforms> indicates which platforms should be supported.

For example to generate a project with name AwesomeProject that targets Android, iOS, and Web, run:

```
npx react-native-infinity init AwesomeProject --starter mw
```
`mw` is short-hand keyword to indicate you want to build a project that supports Mobile and Web. Platform keywords can be found by running the `list` command and are displayed below.

#### list 

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


## Starter
This starter contains a bare bones configuration for rendering on each platform.

### Commands

