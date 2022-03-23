/* Predstavuje jednotlive bagdes pocitajici, kolik ktereho druhu del je vybrano */

import React, { Component } from "react";

class SelectCount extends Component {
  getBadgeStyle = (soucasny_pocet, potrebny_pocet) => {
    if (soucasny_pocet < potrebny_pocet) {
      return "badge-warning ";
    }
    return "badge-success ";
  };

  render() {
    let vybrano = this.props.vybrano;
    let potreba = this.props.potreba;
    return (
      <span
        className={this.getBadgeStyle(vybrano, potreba) + "badge ml-3 mb-2 p-2"}
      >
        {this.props.text + ": " + vybrano + "/" + potreba}
      </span>
    );
  }
}

export default SelectCount;
