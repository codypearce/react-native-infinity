// component.jsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "material-bread";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.space}>
        <View style={styles.content}>
          <Text style={styles.title}>REACT NATIVE INFINITY</Text>
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
    width: "100vw",
    marginTop: -56,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 58,
    fontFamily: "Syncopate"
  }
});
