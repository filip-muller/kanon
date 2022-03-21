/* Navigacni panel stranky, ktery obsahuje selectCounts znazornujici pocty
   vybranych del
*/

import React, { Component } from "react";
import SelectCount from "./selectCount";
import { potreba } from "../potreba";

class Navbar extends Component {
  state = { potreba: potreba };

  render() {
    let {
      vybrano_18,
      vybrano_19,
      vybrano_20_21_cz,
      vybrano_20_21_svet,
      vybrano_celkem,
      vybrano_drama,
      vybrano_poezie,
      vybrano_proza,
    } = this.props.pocty;
    let {
      potreba_proza,
      potreba_poezie,
      potreba_drama,
      potreba_18,
      potreba_19,
      potreba_20_21_svet,
      potreba_20_21_cz,
      potreba_celkem,
    } = this.state.potreba;

    return (
      <nav class="navbar sticky-top navbar-light bg-light navbar-expand-lg">
        <SelectCount
          text="Vybráno"
          vybrano={vybrano_celkem}
          potreba={potreba_celkem}
        />
        <SelectCount
          text="Próza"
          vybrano={vybrano_proza}
          potreba={potreba_proza}
        />
        <SelectCount
          text="Poezie"
          vybrano={vybrano_poezie}
          potreba={potreba_poezie}
        />
        <SelectCount
          text="Drama"
          vybrano={vybrano_drama}
          potreba={potreba_drama}
        />
        <SelectCount
          text="Do 18. století"
          vybrano={vybrano_18}
          potreba={potreba_18}
        />
        <SelectCount
          text="19. století"
          vybrano={vybrano_19}
          potreba={potreba_19}
        />
        <SelectCount
          text="20. a 21. století svět"
          vybrano={vybrano_20_21_svet}
          potreba={potreba_20_21_svet}
        />
        <SelectCount
          text="20. a 21. století česká"
          vybrano={vybrano_20_21_cz}
          potreba={potreba_20_21_cz}
        />
      </nav>
    );
  }
}

export default Navbar;
