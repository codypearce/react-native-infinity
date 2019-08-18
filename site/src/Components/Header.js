import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "material-bread";
import HeaderLink from "./HeaderLink";

export default class Header extends React.Component {
  render() {
    return (
      <Appbar
        barType={"normal"}
        title={"React Native Infinity"}
        actionItems={[
          <HeaderLink text={"Home"} to="/" />,
          <HeaderLink text={"Interactive"} to="/interactive" />,
          <HeaderLink text={"CLI"} to="/cli" />
        ]}
      />
    );
  }
}
