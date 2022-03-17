import React, { Component } from "react";
import ListDel from "./components/listDel";
import { knihy } from "./knihy.js";

class App extends Component {
  state = {
    knihy: knihy,
    vybrano_celkem: 0,
    vybrano_proza: 0,
    vybrano_poezie: 0,
    vybrano_drama: 0,
    vybrano_18: 0,
    vybrano_19: 0,
    vybrano_20_21_svet: 0,
    vybrano_20_21_cz: 0,
    vybrano_celkem: 0,
    potreba_proza: 2,
    potreba_poezie: 2,
    potreba_drama: 2,
    potreba_18: 2,
    potreba_19: 3,
    potreba_20_21_svet: 4,
    potreba_20_21_cz: 5,
  };

  handleSelect = (id) => {
    let { vybrano_celkem: vybrano_celkem } = this.state;
    if (vybrano_celkem >= 20) {
      alert("Již máš vybráno 20 děl");
      return;
    }
    let knihy = this.state.knihy.map((k) => {
      if (k.id == id) {
        k.selected = true;
      }
      return k;
    });
    vybrano_celkem += 1;
    this.setState({ knihy, vybrano_celkem });
    this.updateVybrano();
  };

  updateVybrano = () => {
    this.setState({
      vybrano_proza: this.state.knihy.filter(
        (k) => k.selected && k.druh == "proza"
      ).length,
      vybrano_poezie: this.state.knihy.filter(
        (k) => k.selected && k.druh == "poezie"
      ).length,
      vybrano_drama: this.state.knihy.filter(
        (k) => k.selected && k.druh == "drama"
      ).length,
      vybrano_18: this.state.knihy.filter((k) => k.selected && k.obdobi == "18")
        .length,
      vybrano_19: this.state.knihy.filter((k) => k.selected && k.obdobi == "19")
        .length,
      vybrano_20_21_svet: this.state.knihy.filter(
        (k) => k.selected && k.obdobi == "20-21-svet"
      ).length,
      vybrano_20_21_cz: this.state.knihy.filter(
        (k) => k.selected && k.obdobi == "20-21-cz"
      ).length,
    });
  };

  getBadgeStyle = (soucasny_pocet, potrebny_pocet) => {
    if (soucasny_pocet < potrebny_pocet) {
      return "badge-warning ";
    }
    return "badge-success ";
  };

  render() {
    let {
      knihy,
      vybrano_18,
      vybrano_19,
      vybrano_20_21_cz,
      vybrano_20_21_svet,
      vybrano_celkem,
      vybrano_drama,
      vybrano_poezie,
      vybrano_proza,
      potreba_proza,
      potreba_poezie,
      potreba_drama,
      potreba_18,
      potreba_19,
      potreba_20_21_svet,
      potreba_20_21_cz,
    } = this.state;
    return (
      <div className="m-2">
        <span
          className={
            this.getBadgeStyle(vybrano_proza, potreba_proza) + "badge ml-3 p-2"
          }
        >
          {"Próza: " + vybrano_proza + "/" + potreba_proza}
        </span>
        <span
          className={
            this.getBadgeStyle(vybrano_poezie, potreba_poezie) +
            "badge ml-3 p-2"
          }
        >
          {"Poezie: " + vybrano_poezie + "/" + potreba_poezie}
        </span>
        <span
          className={
            this.getBadgeStyle(vybrano_drama, potreba_drama) + "badge ml-3 p-2"
          }
        >
          {"Drama: " + vybrano_drama + "/" + potreba_drama}
        </span>
        <span
          className={
            this.getBadgeStyle(vybrano_18, potreba_18) + "badge ml-3 p-2"
          }
        >
          {"Do 18. století: " + vybrano_18 + "/" + potreba_18}
        </span>
        <span
          className={
            this.getBadgeStyle(vybrano_19, potreba_19) + "badge ml-3 p-2"
          }
        >
          {"19. století: " + vybrano_19 + "/" + potreba_19}
        </span>
        <span
          className={
            this.getBadgeStyle(vybrano_20_21_svet, potreba_20_21_svet) +
            "badge ml-3 p-2"
          }
        >
          {"20. a 21. století svět: " +
            vybrano_20_21_svet +
            "/" +
            potreba_20_21_svet}
        </span>
        <span
          className={
            this.getBadgeStyle(vybrano_20_21_cz, potreba_20_21_cz) +
            "badge ml-3 p-2"
          }
        >
          {"20. a 21. století česká: " +
            vybrano_20_21_cz +
            "/" +
            potreba_20_21_cz}
        </span>
        <ListDel knihy={knihy} onSelect={this.handleSelect} />
      </div>
    );
  }
}

export default App;
