import React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Anchor } from "material-bread";
import HeaderLink from "./HeaderLink";
import { Link } from "react-router-dom";
import MCIconButton from "./MCIconButton";

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
          <HeaderLink text={"CLI"} to="/cli" />,
          <Anchor
            url="https://github.com/codypearce/react-native-infinity"
            style={{ textDecoration: "none", color: "white" }}
          >
            <MCIconButton name="github-circle" color={"white"} size={30} />
          </Anchor>
        ]}
      />
    );
  }
}
