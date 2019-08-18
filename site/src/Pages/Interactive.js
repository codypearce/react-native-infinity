// component.jsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Subtitle } from "material-bread";
import HeaderLink from "../Components/HeaderLink";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.space}>
        <View style={styles.content}>
          <Text style={styles.title}>Getting Started</Text>
          <Subtitle
            text="Enter the app name and select the platforms the app will target. This will generate a CLI command that you can run in your terminal to create a starter React Native project targeting the selected platforms."
            style={styles.caption}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    height: "100vh",
    width: "100vw",
    paddingTop: 56
  },
  content: {
    height: "100vh",
    maxWidth: 972,
    margin: "0 auto",
    marginLeft: "10%",
    marginRight: "auto",
    paddingTop: 80
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
  caption: {
    color: "rgba(255,255,255,.85)",
    fontSize: 16,
    marginTop: 12,
    lineHeight: 24
  }
});
