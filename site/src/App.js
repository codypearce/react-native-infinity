// component.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import EStyleSheet from 'react-native-extended-stylesheet';
import Router from './Router';
export default class App extends React.Component {
  render() {
    EStyleSheet.build({
      // always call EStyleSheet.build() even if you don't use global variables!
      $textColor: '#0275d8',
    });
    return <Router />;
  }
}
