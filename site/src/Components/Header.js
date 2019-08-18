import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "material-bread";
import HeaderLink from "./HeaderLink";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <Appbar
        barType={"normal"}
        title={
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            React Native Infinity
          </Link>
        }
        actionItems={[
          <HeaderLink text={"Interactive"} to="/interactive" />,
          <HeaderLink text={"CLI"} to="/cli" />
        ]}
      />
    );
  }
}
