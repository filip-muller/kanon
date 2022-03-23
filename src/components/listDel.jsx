/* Predstavuje vsechna dila z urciteha casoveho obdobi
   Dava dohromady jednotlive DiloLi a title
*/

import React, { Component } from "react";
import DiloLi from "./diloLi";

class ListDel18 extends Component {
  state = {};

  render() {
    return (
      <div className="card m-3" id={this.props.obdobi}>
        <h5 className="card-header card-title">{this.props.title}</h5>
        <ul className="list-group list-group-flush">
          {this.props.knihy
            .filter((k) => k.obdobi == this.props.obdobi)
            .map((kniha) => (
              <DiloLi
                key={kniha.id}
                kniha={kniha}
                onSelect={this.props.onSelect}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default ListDel18;
