// component.jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Subtitle } from 'material-bread';

export default class App extends React.Component {
  render() {
    const { pageWidth } = this.props;
    return (
      <View style={styles.space}>
        <View style={styles.content}>
          <Text style={[styles.title, { fontSize: pageWidth < 600 ? 30 : 58 }]}>
            404
          </Text>
          <Subtitle text="Not Found" style={styles.caption} />
          <View style={styles.row}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    height: '100vh',
    width: '100vw',
    paddingTop: 56,
  },
  content: {
    height: '100vh',
    width: '100vw',
    marginTop: -56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 16,
  },
  title: {
    color: 'white',
    fontSize: 58,
    fontFamily: 'Syncopate',
    textAlign: 'center',
  },
  caption: {
    color: 'rgba(255,255,255,.85)',
    fontSize: 20,
    textAlign: 'center',
  },
});
