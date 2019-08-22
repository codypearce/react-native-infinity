// component.jsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Button,
  Subtitle,
  DataTable,
  DataTableCell,
  DataTableRow
} from "material-bread";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.space}>
        <View style={styles.content}>
          <Text style={styles.title}>CLI</Text>
          <Subtitle
            text="The React Native Infinity CLI supports creating a new template project that targets various platforms. You can see the full list of options by typing --help in the command line."
            style={styles.caption}
          />
          <View style={styles.section}>
            <Text style={[styles.h2]}>{"Generating a project"}</Text>
            <Subtitle text="The main  " style={styles.caption} />
          </View>
          <View style={styles.section}>
            <Text style={[styles.h2]}>{"Table of Commands"}</Text>
            <DataTable>
              <DataTableRow>
                <DataTableCell text={"Command"} borderRight />
                <DataTableCell text={"Alias"} />
                <DataTableCell text={"Description"} />
                <DataTableCell text={"Options "} />
              </DataTableRow>
              <DataTableRow>
                <DataTableCell text={"init"} borderRight />
                <DataTableCell text={"i"} />
                <DataTableCell
                  text={"Initializes project in a new directory with a name"}
                />
                <DataTableCell text={"--starter <template>"} />
              </DataTableRow>
              <DataTableRow>
                <DataTableCell text={"list"} borderRight />
                <DataTableCell text={"lss"} />
                <DataTableCell text={"Lists possible starters"} />
                <DataTableCell text={""} />
              </DataTableRow>
            </DataTable>
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
    width: "100%",
    maxWidth: 972,
    marginLeft: "auto",
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
