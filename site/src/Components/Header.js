import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Anchor, Ripple, Switch, BodyText } from 'material-bread';
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';
import MCIconButton from './MCIconButton';

export default class Header extends React.Component {
  state = {
    width: 1080,
  };
  handleLayout = (event) => {
    const width = event.nativeEvent.layout.width;
    this.setState({ width });
  };

  toggleMode = () => {
    const { handleMode, mode } = this.props;
    let newMode = mode == 'space' ? 'dark' : 'space';
    if (newMode == mode) return;
    handleMode(newMode);
  };
  render() {
    const { mode } = this.props;

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
            {'RNI'}
          </Link>
        }
        position={'absolute'}
        actionItems={[
          <Anchor
            url="https://codinhood.com/dynamic-react-native-starters"
            containerStyle={{}}>
            <Ripple>
              <BodyText
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  color: 'white',
                  marginRight: 60,
                  display: 'block',
                }}
                text={'Learn More'}
              />
            </Ripple>
          </Anchor>,
          <Switch
            onPress={this.toggleMode}
            checked={mode == 'dark'}
            label={
              <BodyText
                style={{ color: 'white', width: 50 }}
                text={mode == 'space' ? 'Space' : 'Dark'}
              />
            }
            trackStyle={{ backgroundColor: 'rgba(255,255,255,.45)' }}
            thumbStyle={{
              backgroundColor: '#2c3e50',
            }}
            labelPos={'left'}
            style={{ alignSelf: 'center', marginRight: 20 }}
          />,
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
