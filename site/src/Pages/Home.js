// component.jsx
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
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
    uilibrary: '',
  };

  handleUILibrary = library => {
    const { uilibrary } = this.state;
    let newUILibrary = library;

    if (uilibrary == library) newUILibrary = '';

    this.setState({
      uilibrary: newUILibrary,
    });
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
      } else if (platform == 'ma') {
        newPlatforms[3] = platform;
      } else if (platform == 'wi') {
        newPlatforms[4] = platform;
      }
    }

    this.setState({
      platforms: newPlatforms,
      starter: newPlatforms.join(''),
    });
  };

  _renderUILibraries() {
    const { uilibrary } = this.state;
    const { pageWidth, mode } = this.props;

    return (
      <View style={styles.section}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <Text
            className={mode == 'space' ? 'title-glow' : ''}
            style={[
              styles.h2,
              {
                color: '#ededed',
              },
            ]}>
            UI Library
          </Text>
        </View>

        <View
          style={[
            styles.row,
            { justifyContent: pageWidth < 370 ? 'center' : 'flex-start' },
          ]}>
          <PlatformButton
            mode={mode}
            platform="m"
            handlePlatform={this.handleUILibrary}
            active={uilibrary == 'm'}
            pageWidth={pageWidth}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Image
                source={require('../../static/images/material-bread.svg')}
                style={{ height: 40, width: 50, backgroundSize: 'contain' }}
              />
            </View>
            <Text style={{ fontSize: 26, color: 'white', marginTop: 10 }}>
              {'Material Bread'}
            </Text>
          </PlatformButton>
          <PlatformButton
            mode={mode}
            platform="k"
            handlePlatform={this.handleUILibrary}
            active={uilibrary == 'k'}
            pageWidth={pageWidth}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Image
                source={require('../../static/images/ui-kitten.png')}
                style={{ height: 31, width: 133, backgroundSize: 'contain' }}
              />
            </View>
            <Text style={{ fontSize: 28, color: 'white', marginTop: 20 }}>
              {'UI Kitten'}
            </Text>
          </PlatformButton>
        </View>
      </View>
    );
  }

  render() {
    const { platforms, starter, uilibrary } = this.state;
    const { pageWidth, mode } = this.props;

    const iconSize = 28;

    return (
      <View style={styles.space}>
        <View
          style={[
            styles.content,
            {
              backgroundColor:
                mode == 'dark' ? 'transparent' : 'rgba(0,0,0,.5)',
            },
          ]}>
          <View style={styles.topSection}>
            <span
              className={mode == 'space' ? 'title-glow' : ''}
              style={{
                ...styles.title,
                fontFamily: 'Syncopate',
                fontSize: pageWidth < 600 ? 30 : 44,
                color: 'white',
              }}>
              <span>R</span>
              <span>E</span>
              <span>A</span>
              <span>C</span>
              <span>T</span> <span>NATIVE</span> <span>INFINITY</span>
            </span>
            <Subtitle
              text={`React Native Infinity is a React Native CLI that generates projects to target multiple platforms. Please check out the github project for more information.

Below is a simple GUI for generating a CLI command with the configuration you want, however you can also use interactive prompts in the command line. `}
              style={styles.caption}
            />
          </View>

          <View style={styles.section}>
            <Text
              className={mode == 'space' ? 'title-glow' : ''}
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
                className={mode == 'space' ? 'title-glow' : ''}
                style={[
                  styles.h2,
                  {
                    color: starter.length < 1 ? '#B71C1C' : '#ededed',
                  },
                ]}>
                Platforms
              </Text>
            </View>

            <View
              style={[
                styles.row,
                { justifyContent: pageWidth < 370 ? 'center' : 'flex-start' },
              ]}>
              <PlatformButton
                mode={mode}
                text="Mobile"
                platform="m"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == 'm')}
                pageWidth={pageWidth}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../static/images/apple.svg')}
                    style={{
                      height: iconSize,
                      width: iconSize,
                      backgroundSize: 'contain',
                    }}
                  />
                  <Image
                    source={require('../../static/images/android.svg')}
                    style={{
                      height: iconSize,
                      width: iconSize,
                      backgroundSize: 'contain',
                    }}
                  />
                </View>
                <Text style={{ fontSize: 28, color: 'white', marginTop: 20 }}>
                  {'Mobile'}
                </Text>
              </PlatformButton>
              <PlatformButton
                mode={mode}
                platform="w"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == 'w')}
                pageWidth={pageWidth}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../static/images/chrome.svg')}
                    style={{
                      height: iconSize,
                      width: iconSize,
                      backgroundSize: 'contain',
                    }}
                  />
                  <Image
                    source={require('../../static/images/firefox.svg')}
                    style={{
                      height: iconSize,
                      width: iconSize,
                      backgroundSize: 'contain',
                    }}
                  />
                  <Image
                    source={require('../../static/images/edge.svg')}
                    style={{
                      height: iconSize,
                      width: iconSize,
                      backgroundSize: 'contain',
                    }}
                  />
                  <Image
                    source={require('../../static/images/safari.svg')}
                    style={{
                      height: iconSize,
                      width: iconSize,
                      backgroundSize: 'contain',
                    }}
                  />
                </View>
                <Text style={{ fontSize: 28, color: 'white', marginTop: 20 }}>
                  {'Web'}
                </Text>
              </PlatformButton>
              <PlatformButton
                mode={mode}
                platform="e"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == 'e')}
                endButton
                pageWidth={pageWidth}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../static/images/windows.svg')}
                    style={{
                      height: iconSize,
                      width: iconSize,
                      backgroundSize: 'contain',
                    }}
                  />

                  <Image
                    source={require('../../static/images/linux.svg')}
                    style={{
                      height: iconSize,
                      width: iconSize,
                      backgroundSize: 'contain',
                    }}
                  />
                  <Image
                    source={require('../../static/images/macos2.svg')}
                    style={{
                      height: 13,
                      width: 50,
                      marginTop: 5,
                    }}
                  />
                </View>
                <Text style={{ fontSize: 28, color: 'white', marginTop: 20 }}>
                  {'Electron'}
                </Text>
              </PlatformButton>
              <PlatformButton
                mode={mode}
                platform="ma"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == 'ma')}
                endButton
                pageWidth={pageWidth}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../static/images/macos2.svg')}
                    style={{
                      height: 17,
                      width: 66,
                      backgroundSize: 'contain',
                    }}
                  />
                </View>
                <Text style={{ fontSize: 28, color: 'white', marginTop: 20 }}>
                  {'MacOS'}
                </Text>
              </PlatformButton>
              <PlatformButton
                mode={mode}
                platform="wi"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == 'wi')}
                endButton
                pageWidth={pageWidth}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../static/images/windows.svg')}
                    style={{
                      height: iconSize + 2,
                      width: iconSize + 2,
                      backgroundSize: 'contain',
                    }}
                  />
                </View>
                <Text style={{ fontSize: 28, color: 'white', marginTop: 20 }}>
                  {'Windows'}
                </Text>
              </PlatformButton>
            </View>
          </View>

          {this._renderUILibraries()}
          <View style={styles.section}>
            <Text
              className={mode == 'space' ? 'title-glow' : ''}
              style={styles.h2}>
              CLI Command
            </Text>
            <CLICard
              appName={this.state.appName}
              starter={this.state.starter}
              pageWidth={pageWidth}
              uilibrary={uilibrary}
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
    marginTop: 20,
    marginBottom: 60,
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: 24,
    borderRadius: 8,
  },
  topSection: {
    maxWidth: 700,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Syncopate',
  },
  h2: {
    color: '#ededed',
    fontSize: 20,
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
