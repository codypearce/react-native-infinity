import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Button } from 'material-bread';

export default class PlatformButton extends React.Component {
  render() {
    const { children, platform, active, endButton, pageWidth } = this.props;

    return (
      <button className={`glow-on-hover ${active ? 'glow--selected' : ''}`}>
        <Button
          type="flat"
          containerStyle={{}}
          radius={10}
          style={{
            height: 100,
            width: 200,
            flexDirection: 'column',
            opacity: active ? 1 : 0.8,
            marginRight: endButton || pageWidth < 370 ? 0 : 8,
            marginBottom: 8,

            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
          onPress={() => this.props.handlePlatform(platform)}
          color={'transparent'}
          textColor={'white'}>
          {children}
        </Button>
      </button>
    );
  }
}

const styles = StyleSheet.create({
  cliCard: {
    padding: 12,
    marginTop: 10,
    backgroundColor: '#2196F3',
    position: 'relative',
  },
});
