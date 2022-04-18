/* Tlacitko, ktere uzivateli umozni exportovat seznam zvolenych knih */

import React, { Component } from "react";
import "../index.css";

class ExportBtn extends Component {
  state = {};

  getBadgeClass = () => {
    if (this.props.vybrano < 20) return "secondary";
    return "success";
  };

  render() {
    return (
      <a
        onClick={this.props.onExport}
        className={`badge badge-${this.getBadgeClass()} noselect p-2`}
        style={{
          position: "fixed",
          bottom: "3%",
          right: "2%",
          fontSize: "large",
          zIndex: "100",
          color: "white",
          cursor: "pointer",
        }}
      >
        Export
      </a>
    );
  }
}

export default ExportBtn;
