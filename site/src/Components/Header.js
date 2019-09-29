import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Anchor, Ripple } from 'material-bread';
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';
import MCIconButton from './MCIconButton';

export default class Header extends React.Component {
  state = {
    width: 1080,
  };
  handleLayout = event => {
    const width = event.nativeEvent.layout.width;
    this.setState({ width });
  };
  render() {
    const { width } = this.state;
    const widthSmall = width < 550;
    return (
      <Appbar
        onLayout={this.handleLayout}
        barType={'normal'}
        elevation={0}
        style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        title={
          <Link
            to={'/'}
            style={{
              textDecoration: 'none',
              color: 'white',
              fontFamily: 'Syncopate',
            }}>
            {widthSmall ? 'RNI' : ' REACT NATIVE INFINITY'}
          </Link>
        }
        position={'absolute'}
        actionItems={[
          <Anchor
            url="https://github.com/codypearce/react-native-infinity"
            style={{ textDecoration: 'none', color: 'white' }}>
            <Ripple>
              <img
                src="/static/images/github.svg"
                style={{ height: 30, marginLeft: 12 }}
              />
            </Ripple>
          </Anchor>,
        ]}
      />
    );
  }
}
