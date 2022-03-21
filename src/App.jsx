import React, { Component } from "react";
import ListDel from "./components/listDel";
import Navbar from "./components/navbar";
import { knihy } from "./knihy.js";

class App extends Component {
  state = {
    knihy: knihy,
    pocty: {
      vybrano_celkem: 0,
      vybrano_proza: 0,
      vybrano_poezie: 0,
      vybrano_drama: 0,
      vybrano_18: 0,
      vybrano_19: 0,
      vybrano_20_21_svet: 0,
      vybrano_20_21_cz: 0,
      vybrano_celkem: 0,
    },
  };

  handleSelect = (id) => {
    let { vybrano_celkem: vybrano_celkem } = this.state.pocty;
    if (vybrano_celkem >= 20) {
      alert("Již máš vybráno 20 děl");
      return;
    }
    // najdi knihu ktera byla vybrana a zmen u ni selected
    let knihy = this.state.knihy.map((k) => {
      if (k.id == id) {
        k.selected = true;
      }
      return k;
    });
    this.setState({ knihy });
    this.updatePocty();
  };

  updatePocty = () => {
    let { knihy } = this.state;
    let pocty = {
      vybrano_celkem: knihy.filter((k) => k.selected).length,
      vybrano_proza: knihy.filter((k) => k.selected && k.druh == "proza")
        .length,
      vybrano_poezie: knihy.filter((k) => k.selected && k.druh == "poezie")
        .length,
      vybrano_drama: knihy.filter((k) => k.selected && k.druh == "drama")
        .length,
      vybrano_18: knihy.filter((k) => k.selected && k.obdobi == "18").length,
      vybrano_19: knihy.filter((k) => k.selected && k.obdobi == "19").length,
      vybrano_20_21_svet: knihy.filter(
        (k) => k.selected && k.obdobi == "20-21-svet"
      ).length,
      vybrano_20_21_cz: knihy.filter(
        (k) => k.selected && k.obdobi == "20-21-cz"
      ).length,
    };
    this.setState({ pocty });
  };

  render() {
    let { knihy } = this.state;
    return (
      <div>
        <Navbar pocty={this.state.pocty} />
        <div className="m-3">
          <ListDel knihy={knihy} onSelect={this.handleSelect} />
        </div>
      </div>
    );
  }
}

export default App;
