import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Card } from "material-bread";

const CLICard = ({ appName, starter }) => {
  return (
    <Card style={styles.cliCard}>
      <Text>
        npx react-native-infinity init {appName} --starter {starter}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cliCard: {
    padding: 12,
    marginTop: 10,
    backgroundColor: "rgba(255,255,255,0.95)"
  }
});

export default CLICard;
