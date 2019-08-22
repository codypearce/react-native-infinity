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
    const options = [
      { longName: "mobile", shortName: "m", platforms: "Android, iOS" },
      {
        longName: "mobileWeb",
        shortName: "mw",
        platforms: "Android, iOS, Web"
      },
      {
        longName: "mobileWebElectron",
        shortName: "mwe",
        platforms: "Android, iOS, Web, Electron"
      },
      {
        longName: "mobileElectron",
        shortName: "me",
        platforms: "Android, iOS, Electron"
      },
      { longName: "web", shortName: "w", platforms: "Web" },
      { longName: "webElectron", shortName: "we", platforms: "Web, Electron" },
      { longName: "electron", shortName: "e", platforms: "Electron" }
    ];

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
            <View style={styles.wrappingText}>
              <Subtitle
                text={`The main way to generate a project is with`}
                style={styles.caption}
              />
              <View style={styles.codeInline}>
                <Text style={styles.codeInlineText}>
                  {"init <name> --starter <template>"}
                </Text>
              </View>
              <Subtitle
                text={`, where name is the name of your application and template is the name of the starter to use.`}
                style={styles.caption}
              />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={[styles.h2]}>{"Table of Commands"}</Text>
            <DataTable>
              <DataTableRow>
                <DataTableCell
                  text={"Command"}
                  borderRight
                  textStyle={{ fontWeight: "bold" }}
                />
                <DataTableCell
                  text={"Alias"}
                  textStyle={{ fontWeight: "bold" }}
                />
                <DataTableCell
                  text={"Description"}
                  textStyle={{ fontWeight: "bold" }}
                />
                <DataTableCell
                  text={"Options "}
                  textStyle={{ fontWeight: "bold" }}
                />
              </DataTableRow>
              <DataTableRow>
                <DataTableCell text={"init <name>"} borderRight />
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
          <View style={styles.section}>
            <Text style={[styles.h2]}>{"Table of starters"}</Text>
            <DataTable>
              <DataTableRow>
                <DataTableCell
                  text={"Long Name"}
                  borderRight
                  textStyle={{ fontWeight: "bold" }}
                />
                <DataTableCell
                  text={"Short Name"}
                  textStyle={{ fontWeight: "bold" }}
                />
                <DataTableCell
                  text={"Platforms"}
                  textStyle={{ fontWeight: "bold" }}
                />
              </DataTableRow>
              {options.map(platform => (
                <DataTableRow>
                  <DataTableCell text={platform.longName} borderRight />
                  <DataTableCell text={platform.shortName} />
                  <DataTableCell text={platform.platforms} />
                </DataTableRow>
              ))}
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
    fontFamily: "Syncopate",
    marginBottom: 12
  },
  h2: {
    color: "black",
    fontSize: 30,
    fontFamily: "Syncopate",
    marginBottom: 12
  },
  caption: {
    color: "black",
    fontSize: 16,
    lineHeight: 24
  },
  section: {
    marginTop: 60,
    zIndex: 100,
    position: "relative",
    backgroundColor: "white"
  },
  wrappingText: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    display: "inline"
  },
  codeInline: {
    backgroundColor: "black",
    padding: 4,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    display: "inline"
  },
  codeInlineText: {
    color: "#2196F3"
  }
});
