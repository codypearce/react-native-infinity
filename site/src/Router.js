import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { View } from 'react-native';

import Home from './Pages/Home';

import NotFound from './Pages/NotFound';

import Header from './Components/Header';

export default class AppRouter extends React.Component {
  state = {
    width: 1080,
  };

  handleLayout = event => {
    const width = event.nativeEvent.layout.width;
    this.setState({ width });
  };

  render() {
    const { width } = this.state;

    return (
      <Router>
        <div>
          <Header />
          <View
            style={{ height: '100vh', paddingTop: 56 }}
            onLayout={this.handleLayout}>
            <Route
              path="/"
              exact
              render={props => <Home pageWidth={width} />}
            />

            <Route render={props => <NotFound pageWidth={width} />} />
          </View>
        </div>
      </Router>
    );
  }
}
