/* Predstavuje <li> jednotliveho dila ve finalnim list groupu.
   Obsahuje v sobe komponentu Dilo, ktera poskytuje informace o dile
*/

import React, { Component } from "react";
import Dilo from "./dilo";

class DiloLi extends Component {
  state = {};

  render() {
    const { id, selected } = this.props.kniha;
    return (
      <li
        className={
          "list-group-item list-group-item-action noselect" +
          (selected && " active")
        }
        style={{ cursor: "pointer" }}
        onClick={() => this.props.onSelect(id)}
      >
        <Dilo kniha={this.props.kniha} />
      </li>
    );
  }
}

export default DiloLi;
