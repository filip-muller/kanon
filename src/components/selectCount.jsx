/* Predstavuje jednotlive bagdes pocitajici, kolik ktereho druhu del je vybrano */

import React, { Component } from "react";
import "../index.css";

class SelectCount extends Component {
  getBadgeStyle = (t) => {
    const { vybrano, potreba } = this.props;
    if (vybrano < potreba) {
      return "badge-warning ";
    }
    return "badge-success ";
  };

  getOnClick = () => {
    if (this.props.ref_)
      return () => (window.location.href = "#" + this.props.ref_);
    return () => {};
  };

  getStyle = () => {
    if (this.props.ref_) return { cursor: "pointer" };
    return {};
  };

  render() {
    let vybrano = this.props.vybrano;
    let potreba = this.props.potreba;
    return (
      <span
        className={this.getBadgeStyle() + "badge ml-3 mb-2 p-2 noselect"}
        onClick={this.getOnClick()}
        style={this.getStyle()}
      >
        {this.props.text + ": " + vybrano + "/" + potreba}
      </span>
    );
  }
}

export default SelectCount;
