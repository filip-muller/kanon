/* Predstavuje vsechna dila z urciteha casoveho obdobi
   Dava dohromady jednotlive DiloLi a title
*/

import React, { Component } from "react";
import DiloLi from "./diloLi";
import HideBtn from "./hideBtn";

class ListDel extends Component {
  state = { hidden: false };

  handleHide = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  formatCount = () => {
    if (this.props.vybrano == 0) return "";
    return this.props.vybrano;
  };

  render() {
    return (
      <div className="card m-3" id={this.props.obdobi}>
        <span
          className="card-header card-title noselect"
          style={{
            cursor: "pointer",
          }}
          onClick={this.handleHide}
        >
          <h5 style={{ display: "inline" }}>{this.props.title}</h5>
          <span className="badge badge-pill badge-primary ml-2">
            {this.formatCount()}
          </span>
          <HideBtn hidden={this.state.hidden} />
        </span>
        {!this.state.hidden && (
          <ul className="list-group list-group-flush">
            {this.props.knihy
              .filter(
                (k) =>
                  k.obdobi == this.props.obdobi &&
                  this.props.checkedDruhy.includes(k.druh)
              )
              .map((kniha) => (
                <DiloLi
                  key={kniha.id}
                  kniha={kniha}
                  onSelect={this.props.onSelect}
                />
              ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ListDel;
