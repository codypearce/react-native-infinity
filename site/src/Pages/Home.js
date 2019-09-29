// component.jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Subtitle, TextField, Card } from 'material-bread';
import HeaderLink from '../Components/HeaderLink';
import CLICard from '../Components/CLICard';
import PlatformButton from '../Components/PlatformButton';

export default class App extends React.Component {
  state = {
    appName: 'AwesomeProject',
    starter: 'm',
    starterLong: 'Android, iOS',
    platforms: ['m'],
  };

  handlePlatform = platform => {
    const { platforms, command } = this.state;
    const newPlatforms = platforms.slice();
    const index = newPlatforms.findIndex(item => item == platform);

    if (index > -1) {
      newPlatforms[index] = null;
    } else {
      if (platform == 'm') {
        newPlatforms[0] = platform;
      } else if (platform == 'w') {
        newPlatforms[1] = platform;
      } else if (platform == 'e') {
        newPlatforms[2] = platform;
      }
    }

    const starterLong = this.buildStartLong(newPlatforms);

    this.setState({
      platforms: newPlatforms,
      starter: newPlatforms.join(''),
      starterLong,
    });
  };

  buildStartLong(newPlatforms) {
    let starterLong = ``;

    if (newPlatforms[0]) starterLong = 'Android, iOS';
    if (newPlatforms[1])
      starterLong += starterLong.length > 0 ? ', Web' : 'Web';
    if (newPlatforms[2])
      starterLong +=
        starterLong.length > 0
          ? ', MacOS, Windows, Linux'
          : 'MacOS, Windows, Linux';

    return starterLong;
  }

  render() {
    const { platforms, starterLong, starter } = this.state;
    const { pageWidth } = this.props;

    return (
      <View style={styles.space}>
        <View style={styles.content}>
          <View style={styles.topSection}>
            <Text
              style={[styles.title, { fontSize: pageWidth < 600 ? 30 : 40 }]}>
              REACT NATIVE INFINITY
            </Text>
            <Subtitle
              text={`React Native Infinity is a React Native CLI that generates projects to target multiple platforms. Please check out the github project for more information.

Below is a simple GUI for generating a CLI command with the configuration you want, however you can also use interactive prompts in the command line. `}
              style={styles.caption}
            />
          </View>

          <View style={styles.section}>
            <Text
              style={[
                styles.h2,
                {
                  color: this.state.appName.length < 1 ? '#B71C1C' : '#ededed',
                },
              ]}>
              App name
            </Text>

            <TextField
              id="app-name"
              value={this.state.appName}
              label={
                this.state.appName.length < 1
                  ? 'AppName is required'
                  : 'App Name'
              }
              onChangeText={value => this.setState({ appName: value })}
              onClick={event => {
                event.target.focus();
              }}
              containerStyle={{
                marginTop: 20,
                maxWidth: 300,
                color: '#ededed',
              }}
              error={this.state.appName.length < 1}
              color={'white'}
              labelColor={'white'}
              underlineColor={'white'}
              style={{ color: 'white' }}
            />
          </View>
          <View style={styles.section}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              <Text
                style={[
                  styles.h2,
                  {
                    color: starter.length < 1 ? '#B71C1C' : '#ededed',
                  },
                ]}>
                Platforms
              </Text>
              <Text
                style={[
                  styles.h2,
                  {
                    fontSize: 24,
                    color: starter.length < 1 ? '#B71C1C' : '#555',
                  },
                ]}>
                {`    ${
                  starter.length < 1 ? 0 : starterLong.split(',').length
                }`}
              </Text>
              <Subtitle text={starterLong} style={{ marginLeft: 8 }} />
            </View>

            <View
              style={[
                styles.row,
                { justifyContent: pageWidth < 370 ? 'center' : 'flex-start' },
              ]}>
              <PlatformButton
                text="Mobile"
                platform="m"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == 'm')}
                pageWidth={pageWidth}
              />
              <PlatformButton
                text="Web"
                platform="w"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == 'w')}
                pageWidth={pageWidth}
              />
              <PlatformButton
                text="Electron"
                platform="e"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == 'e')}
                endButton
                pageWidth={pageWidth}
              />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.h2}>CLI Command</Text>
            <CLICard
              appName={this.state.appName}
              starter={this.state.starter}
              pageWidth={pageWidth}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    width: '100vw',
    height: '100%',
    overflowY: 'auto',
  },
  content: {
    width: '100%',
    maxWidth: 972,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 60,
    marginBottom: 60,
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: 24,
    borderRadius: 8,
  },
  topSection: {
    marginBottom: 20,
    maxWidth: 700,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  title: {
    color: '#ededed',
    fontSize: 34,
    fontFamily: 'Syncopate',
  },
  h2: {
    color: '#ededed',
    fontSize: 30,
    fontFamily: 'Syncopate',
  },
  caption: {
    color: '#ededed',
    fontSize: 14,
    marginTop: 12,
    lineHeight: 24,
  },
  section: {
    marginTop: 60,
    zIndex: 100,
    position: 'relative',
  },
});
