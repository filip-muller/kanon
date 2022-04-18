/* Znazornuje jednotlive dilo a informace o něm, jako nazev, autor a druh */

import React, { Component } from "react";

class Dilo extends Component {
  state = {};

  getClassName = () => {
    let { druh } = this.props.kniha;
    let classes = "badge badge-pill badge-";
    switch (druh) {
      case "proza":
        return classes + "info";
      case "poezie":
        return classes + "danger";
      case "drama":
        return classes + "dark";
      default:
        return classes + "secondary";
    }
  };

  getDruh = () => {
    let { druh } = this.props.kniha;
    if (druh === "proza") {
      return "próza";
    }
    return druh;
  };

  render() {
    const { nazev, autor } = this.props.kniha;

    return (
      <div>
        <span>{autor !== "" && autor + ": "}</span>
        <span>{nazev}</span>
        <span className={this.getClassName() + " ml-3"}>{this.getDruh()}</span>
      </div>
    );
  }
}

export default Dilo;
