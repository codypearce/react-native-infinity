// component.jsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Subtitle, TextField, Card } from "material-bread";
import HeaderLink from "../Components/HeaderLink";
import CLICard from "../Components/CLICard";
import PlatformButton from "../Components/PlatformButton";

export default class App extends React.Component {
  state = {
    appName: "AwesomeProject",
    starter: "m",
    starterLong: "Android iOS",
    platforms: ["m"]
  };

  handlePlatform = platform => {
    const { platforms, command } = this.state;
    const newPlatforms = platforms.slice();
    const index = newPlatforms.findIndex(item => item == platform);
    let newStarterLong = ``;

    if (index > -1) {
      newPlatforms[index] = null;
    } else {
      if (platform == "m") {
        newPlatforms[0] = platform;
      } else if (platform == "w") {
        newPlatforms[1] = platform;
      } else if (platform == "e") {
        newPlatforms[2] = platform;
      }
    }

    const starterLong = this.buildStartLong(newPlatforms);

    this.setState({
      platforms: newPlatforms,
      starter: newPlatforms.join(""),
      starterLong
    });
  };

  buildStartLong(newPlatforms) {
    let starterLong = ``;
    console.log(newPlatforms);
    if (newPlatforms[0]) starterLong = "Android, iOS";
    if (newPlatforms[1])
      starterLong += starterLong.length > 0 ? ", Web" : "Web";
    if (newPlatforms[2])
      starterLong +=
        starterLong.length > 0
          ? ", MacOS, Windows, Linux"
          : "MacOS, Windows, Linux";

    return starterLong;
  }

  render() {
    const { platforms, starterLong } = this.state;

    return (
      <View style={styles.space}>
        <View style={styles.content}>
          <Text style={styles.title}>Getting Started</Text>
          <Subtitle
            text="Enter the app name and select the platforms the app will target. This will generate a CLI command that you can run in your terminal to create a starter React Native project targeting the selected platforms."
            style={styles.caption}
          />

          <View style={styles.section}>
            <Text
              style={[
                styles.h2,
                { color: this.state.appName.length < 1 ? "#B71C1C" : "black" }
              ]}
            >
              App name
            </Text>

            <TextField
              id="app-name"
              value={this.state.appName}
              label={
                this.state.appName.length < 1
                  ? "AppName is required"
                  : "App Name"
              }
              onChangeText={value => this.setState({ appName: value })}
              onClick={event => {
                event.target.focus();
              }}
              containerStyle={{ marginTop: 20, maxWidth: 300 }}
              error={this.state.appName.length < 1}
            />
          </View>
          <View style={styles.section}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={[
                  styles.h2,
                  {
                    color: this.state.platforms.length < 1 ? "#B71C1C" : "black"
                  }
                ]}
              >
                Platforms
              </Text>
              <Subtitle text={starterLong} style={{ marginLeft: 8 }} />
            </View>

            <View style={styles.row}>
              <PlatformButton
                text="Mobile"
                platform="m"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == "m")}
              />
              <PlatformButton
                text="Web"
                platform="w"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == "w")}
              />
              <PlatformButton
                text="Electron"
                platform="e"
                handlePlatform={this.handlePlatform}
                active={platforms.find(item => item == "e")}
                endButton
              />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.h2}>CLI Command</Text>
            <CLICard
              appName={this.state.appName}
              starter={this.state.starter}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    width: "100vw",
    height: "100%",
    overflowY: "auto"
  },
  content: {
    maxWidth: 972,
    marginLeft: "10%",
    marginRight: "auto",
    marginTop: 60,
    marginBottom: 60,
    backgroundColor: "white",
    padding: 24,
    borderRadius: 8
  },

  row: {
    flexDirection: "row",
    marginTop: 16
  },
  title: {
    color: "black",
    fontSize: 40,
    fontFamily: "Syncopate"
  },
  h2: {
    color: "black",
    fontSize: 30,
    fontFamily: "Syncopate"
  },
  caption: {
    color: "black",
    fontSize: 16,
    marginTop: 12,
    lineHeight: 24
  },
  section: {
    marginTop: 60,
    zIndex: 100,
    position: "relative",
    backgroundColor: "white"
  }
});
