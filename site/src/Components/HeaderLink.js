import React from "react";
import { Button } from "material-bread";
import { Link } from "react-router-dom";

export default class HeaderLink extends React.Component {
  render() {
    const { text, to, buttonProps } = this.props;
    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        <Button text={text} {...buttonProps} />
      </Link>
    );
  }
}
