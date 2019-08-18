import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Card, Button } from "material-bread";

export default class PlatformButton extends React.Component {
  render() {
    const { text, platform, active, endButton } = this.props;

    return (
      <Button
        type="flat"
        text={text}
        style={{
          height: 150,
          width: 150,
          flexDirection: "column",
          opacity: active ? 1 : 0.7,
          marginRight: endButton ? 0 : 8
        }}
        onPress={() => this.props.handlePlatform(platform)}
      />
    );
  }
}

const styles = StyleSheet.create({
  cliCard: {
    padding: 12,
    marginTop: 10,
    backgroundColor: "#2196F3",
    position: "relative"
  },
  copyButton: {
    position: "absolute",
    right: 8,
    top: 4
  },
  text: {
    color: "white"
  }
});
