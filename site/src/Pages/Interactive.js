// component.jsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Subtitle, TextField, Card } from "material-bread";
import HeaderLink from "../Components/HeaderLink";
import CLICard from "../Components/CLICard";

export default class App extends React.Component {
  state = {
    appName: "AwesomeProject",
    starter: "m"
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.space}>
        <View style={styles.content}>
          <Text style={styles.title}>Getting Started</Text>
          <Subtitle
            text="Enter the app name and select the platforms the app will target. This will generate a CLI command that you can run in your terminal to create a starter React Native project targeting the selected platforms."
            style={styles.caption}
          />

          <View style={styles.section}>
            <Text style={styles.h2}>App name</Text>
            <TextField
              id="app-name"
              value={this.state.appName}
              style={{ color: "white" }}
              label={"App Name"}
              labelColor={"white"}
              underlineColor={"white"}
              onChangeText={value => this.setState({ appName: value })}
              onClick={event => {
                event.target.focus();
              }}
              containerStyle={{ marginTop: 20, maxWidth: 300 }}
            />
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
    height: "100vh"
  },
  content: {
    maxWidth: 972,
    margin: "0 auto",
    marginLeft: "10%",
    marginRight: "auto",
    paddingTop: 170
  },

  row: {
    flexDirection: "row",
    marginTop: 16
  },
  title: {
    color: "white",
    fontSize: 40,
    fontFamily: "Syncopate"
  },
  h2: {
    color: "white",
    fontSize: 30,
    fontFamily: "Syncopate"
  },
  caption: {
    color: "rgba(255,255,255,.85)",
    fontSize: 16,
    marginTop: 12,
    lineHeight: 24
  },
  section: {
    marginTop: 80,
    marginBottom: 80,
    zIndex: 100,
    position: "relative"
  }
});
