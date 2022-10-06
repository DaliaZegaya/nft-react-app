import React    from "react";
import template from "./Wallet.jsx";

class Wallet extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Wallet;
