/* Predstavuje list group vsech del z 18. stoleti a drive */

import React, { Component } from "react";
import DiloLi from "./diloLi";

class ListDel18 extends Component {
  state = {};

  render() {
    return (
      <div className="m-3">
        <ul className="list-group">
          {this.props.knihy.map((kniha) => (
            <DiloLi
              key={kniha.id}
              kniha={kniha}
              onSelect={this.props.onSelect}
            />
          ))}
          <DiloLi
            kniha={{
              id: 1,
              nazev: "Stařec a moře",
              autor: "Ernest Hemingway",
              obdobi: "20-21-svet",
              druh: "proza",
            }}
          />
          <li className="list-group-item">bagr</li>
        </ul>
      </div>
    );
  }
}

export default ListDel18;
