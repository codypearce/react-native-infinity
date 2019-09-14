# React Native Inifinity
[![Netlify Status](https://api.netlify.com/api/v1/badges/671f47a2-1863-4a7e-aaea-d07e8907d816/deploy-status)](https://app.netlify.com/sites/silly-sinoussi-9c57cb/deploys)

React Native Inifinity is a CLI that generates React Native projects for all platforms your app needs to support.

You can use the [interactive](https://www.reactnativeinfinity.com/) tool in the docs to generate the CLI command you need, or follow the API docs to create your own command. 


## Installation 

You can install the project on NPM globally, but the preferred method is to simply use npx without installing anything.

`npm install react-native-infinity -g`

## Usage

The main command is `init <name> --starter <template>` where name is the name of your application and template is the name of the starter project.

First decide what platforms your app needs to support, then choose the template that targets those platforms.

For example to generate a project with name AwesomeProject that targets Android, iOS, and Web, run:

```
npx react-native-infinity init AwesomeProject --starter mw
```

You can see list of templates and platforms below

## Templates 

| Long Name         | Short Name | Platforms                |
|-------------------|------------|--------------------------|
| mobile            | m          | Android iOS              |
| mobileWeb         | mw         | Android iOS Web          |
| mobileWebElectron | mwe        | Android iOS Web Electron |
| mobileElectron    | me         | Android iOS Electron     |
| web               | w          | Web                      |
| webElectron       | we         | Web Electron             |
| electron          | e          | Electron                 |
