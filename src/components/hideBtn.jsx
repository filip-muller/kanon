/* Tlacitko, ktere umoznuje schovat ("zabalit") dila z urciteho obdobi */

import React, { Component } from "react";
import "../index.css";

class HideBtn extends Component {
  state = { text: "▲" };

  getText = () => {
    if (this.props.hidden) return "▼";
    return "▲";
  };

  render() {
    return (
      <span
        className="ml-2 noselect"
        style={{
          cursor: "pointer",
          fontSize: "0.75rem",
        }}
        onClick={this.props.onClick_}
      >
        <span className="m-1">{this.getText()}</span>
      </span>
    );
  }
}

export default HideBtn;
