import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Card, Button } from "material-bread";

export default class CLICard extends React.Component {
  state = {
    copySuccess: false
  };

  copyToClipboard = () => {
    const { appName, starter } = this.props;
    var textField = document.createElement("textarea");
    textField.innerHTML = `npx react-native-infinity init ${appName} --starter ${starter}`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    this.setState({ copySuccess: true }, () => {
      setTimeout(() => this.setState({ copySuccess: false }), 1000);
    });
  };
  render() {
    const { appName, starter } = this.props;
    const { copySuccess } = this.state;
    return (
      <Card style={styles.cliCard}>
        <Text style={styles.text}>
          npx react-native-infinity init {appName} --starter {starter}
        </Text>
        <Button
          text={copySuccess ? "Copied" : "Copy"}
          type="flat"
          color={"#D81B60"}
          style={styles.copyButton}
          dense
          onPress={this.copyToClipboard}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cliCard: {
    padding: 12,
    marginTop: 10,
    backgroundColor: "#212121",
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
