// component.jsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "material-bread";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>React Native Infinity</Text>
        <Button text={"Button"} />
      </View>
    );
  }
}
