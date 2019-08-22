// component.jsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Subtitle } from "material-bread";
import HeaderLink from "../Components/HeaderLink";
import EStyleSheet from "react-native-extended-stylesheet";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.space}>
        <View style={styles.content}>
          <Text style={styles.title}>REACT NATIVE INFINITY</Text>
          <Subtitle
            text="A React Native Starter For All Platforms"
            style={styles.caption}
          />
          <View style={styles.row}>
            <HeaderLink
              to="/interactive"
              buttonProps={{
                type: "outlined",
                style: { marginRight: 8 }
              }}
              text="Get started"
            />
            <HeaderLink
              to="/cli"
              buttonProps={{
                type: "outlined",
                textColor: "#E91E63"
              }}
              text="Docs"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
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
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    marginTop: 16
  },
  title: {
    color: "white",
    fontSize: 58,
    fontFamily: "Syncopate",
    textAlign: "center"
  },
  caption: {
    color: "rgba(255,255,255,.85)",
    fontSize: 20,
    textAlign: "center"
  },
  "@media (max-width: 400)": {
    title: {
      fontSize: 30
    }
  }
});
