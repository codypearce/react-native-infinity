import React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Anchor } from "material-bread";
import HeaderLink from "./HeaderLink";
import { Link } from "react-router-dom";
import MCIconButton from "./MCIconButton";

export default class Header extends React.Component {
  state = {
    width: 1080
  };
  handleLayout = event => {
    const width = event.nativeEvent.layout.width;
    this.setState({ width });
  };
  render() {
    const { width } = this.state;
    const widthSmall = width < 550;
    return (
      <Appbar
        onLayout={this.handleLayout}
        barType={"normal"}
        elevation={0}
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
        title={
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Syncopate"
            }}
          >
            {widthSmall ? "RNI" : " REACT NATIVE INFINITY"}
          </Link>
        }
        position={"absolute"}
        actionItems={[
          <HeaderLink
            text={"Interactive"}
            to={"/interactive"}
            buttonProps={{ textColor: "white" }}
          />,
          <HeaderLink
            text={"CLI"}
            to={"/cli"}
            buttonProps={{ textColor: "white" }}
          />,
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
