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
    let kniha = this.state.knihy.filter((k) => k.id == id)[0];
    if (!kniha.selected) {
      if (this.state.pocty.vybrano_celkem >= 20) {
        alert("Už máš vybráno 20 děl");
        return;
      }
    }
    let autor = [kniha.autor];
    if (autor[0] === "Karel Čapek") autor.push("Karel a Josef Čapkové");
    else if (autor[0] === "Karel a Josef Čapkové") {
      autor.push("Karel Čapek");
      autor.push("Josef Čapek");
    }
    let stejny_autor = false;
    let nazev_stejne;
    this.state.knihy.map((k) => {
      if (k.selected && autor.includes(k.autor) && k.id != id) {
        stejny_autor = true;
        nazev_stejne = k.nazev;
      }
    });

    if (stejny_autor) {
      alert("Od tohoto autora už máš dílo " + nazev_stejne);
      return;
    }
    kniha.selected = !kniha.selected;
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
      <div className="mb-2">
        <Navbar pocty={this.state.pocty} />
        <a className="m-5" style={{ color: "grey" }}>
          <b>Tip:</b> pro vyhledávání použij Ctrl+F
        </a>
        <div className="m-3">
          <ListDel
            knihy={knihy}
            title="18. století a starší"
            obdobi="18"
            onSelect={this.handleSelect}
          />
          <ListDel
            knihy={knihy}
            title="19. století"
            obdobi="19"
            onSelect={this.handleSelect}
          />
          <ListDel
            knihy={knihy}
            title="Světová literatura 20. a 21. století"
            obdobi="20-21-svet"
            onSelect={this.handleSelect}
          />
          <ListDel
            knihy={knihy}
            title="Česká literatura 20. a 21. století"
            obdobi="20-21-cz"
            onSelect={this.handleSelect}
          />
        </div>
        <a className="m-5" style={{ color: "grey" }}>
          Created by Filip Müller<br></br>
          <span className="ml-5">muller@gvp.cz</span>
        </a>
      </div>
    );
  }
}

export default App;
