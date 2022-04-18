import React, { Component } from "react";
import ExportBtn from "./components/exportBtn";
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
    },
    checked: ["proza", "poezie", "drama", ""], // "" pro neurcita dila
  };

  handleSelect = (id) => {
    let kniha = this.state.knihy.filter((k) => k.id === id)[0];
    if (!kniha.selected) {
      if (this.state.pocty.vybrano_celkem >= 20) {
        alert("Už máš vybráno 20 děl");
        return;
      }
    }
    let autor = [kniha.autor];
    if (autor != "") {
      if (autor[0] === "Karel Čapek") autor.push("Karel a Josef Čapkové");
      else if (autor[0] === "Karel a Josef Čapkové") {
        autor.push("Karel Čapek");
        autor.push("Josef Čapek");
      }
      let stejny_autor = false;
      let nazev_stejne;
      for (const k of this.state.knihy) {
        if (k.selected && autor.includes(k.autor) && k.id !== id) {
          stejny_autor = true;
          nazev_stejne = k.nazev;
          break;
        }
      }
      if (stejny_autor) {
        alert("Od tohoto autora už máš dílo " + nazev_stejne);
        return;
      }
    }
    kniha.selected = !kniha.selected;
    this.updatePocty();
  };

  handleExport = () => {
    const res = [];
    for (const k of this.state.knihy) {
      if (k.selected) {
        res.push(((k.autor !== "" || "") && k.autor + ": ") + k.nazev);
      }
    }
    if (res.length === 0) {
      alert("Nemáš vybraná žádná díla");
      return;
    }
    let seznam = res.join(", \n");
    try {
      navigator.clipboard.writeText(seznam);
    } catch (e) {
      let textArea = document.createElement("textarea");
      textArea.value = seznam;

      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    let dila = "děl";
    let copy = "Zkopírováno";
    if (res.length === 1) {
      dila = "dílo";
    } else if ([2, 3, 4].includes(res.length)) {
      dila = "díla";
      copy = "Zkopírována";
    }
    alert(`${copy} ${res.length} ${dila} do schránky.`);
  };

  handleSelectChange = (druh) => {
    let { checked } = this.state;
    let ind = checked.indexOf(druh);
    if (ind === -1) {
      checked.push(druh);
    } else {
      checked.splice(ind, 1);
    }
    this.setState({ checked: checked });
  };

  updatePocty = () => {
    let { knihy } = this.state;

    let pocty = {
      vybrano_celkem: knihy.filter((k) => k.selected).length,
      vybrano_proza: knihy.filter((k) => k.selected && k.druh === "proza")
        .length,
      vybrano_poezie: knihy.filter((k) => k.selected && k.druh === "poezie")
        .length,
      vybrano_drama: knihy.filter((k) => k.selected && k.druh === "drama")
        .length,
      vybrano_18: knihy.filter((k) => k.selected && k.obdobi === "18").length,
      vybrano_19: knihy.filter((k) => k.selected && k.obdobi === "19").length,
      vybrano_20_21_svet: knihy.filter(
        (k) => k.selected && k.obdobi === "20-21-svet"
      ).length,
      vybrano_20_21_cz: knihy.filter(
        (k) => k.selected && k.obdobi === "20-21-cz"
      ).length,
    };
    this.setState({ pocty });
  };

  render() {
    let { knihy } = this.state;
    return (
      <div className="mb-2">
        <Navbar pocty={this.state.pocty} />
        <div className="ml-5">
          <span className="mr-3">
            <b>Filter:</b>
          </span>
          <input
            id="prozacheck"
            type="checkbox"
            value="proza"
            checked={this.state.checked.includes("proza")}
            onChange={() => this.handleSelectChange("proza")}
          ></input>
          <label className="mr-2 ml-1" htmlFor="prozacheck">
            <span className="badge badge-pill badge-info">Próza</span>
          </label>
          <input
            id="poeziecheck"
            type="checkbox"
            checked={this.state.checked.includes("poezie")}
            onChange={() => this.handleSelectChange("poezie")}
          ></input>
          <label className="mr-2 ml-1" htmlFor="poeziecheck">
            <span className="badge badge-pill badge-danger">Poezie</span>
          </label>
          <input
            id="dramacheck"
            type="checkbox"
            checked={this.state.checked.includes("drama")}
            onChange={() => this.handleSelectChange("drama")}
          ></input>
          <label className="mr-2 ml-1" htmlFor="dramacheck">
            <span className="badge badge-pill badge-dark">Drama</span>
          </label>
        </div>
        <a className="m-5" style={{ color: "grey" }}>
          <b>Tip:</b> pro vyhledávání použij Ctrl+F
        </a>
        <div className="m-3">
          <ListDel
            knihy={knihy}
            title="18. století a starší"
            obdobi="18"
            vybrano={this.state.pocty.vybrano_18}
            checkedDruhy={this.state.checked}
            onSelect={this.handleSelect}
          />
          <ListDel
            knihy={knihy}
            title="19. století"
            obdobi="19"
            vybrano={this.state.pocty.vybrano_19}
            checkedDruhy={this.state.checked}
            onSelect={this.handleSelect}
          />
          <ListDel
            knihy={knihy}
            title="Světová literatura 20. a 21. století"
            obdobi="20-21-svet"
            vybrano={this.state.pocty.vybrano_20_21_svet}
            checkedDruhy={this.state.checked}
            onSelect={this.handleSelect}
          />
          <ListDel
            knihy={knihy}
            title="Česká literatura 20. a 21. století"
            obdobi="20-21-cz"
            vybrano={this.state.pocty.vybrano_20_21_cz}
            checkedDruhy={this.state.checked}
            onSelect={this.handleSelect}
          />
        </div>
        <a className="m-5" style={{ color: "grey" }}>
          Created by Filip Müller<br></br>
          <span className="ml-5">muller@gvp.cz</span>
        </a>
        <ExportBtn
          onExport={this.handleExport}
          vybrano={this.state.pocty.vybrano_celkem}
        />
      </div>
    );
  }
}

export default App;
