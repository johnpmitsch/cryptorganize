import React from "react";
import axios from "axios";
import { View } from "react-native";
import { Button } from "react-native-elements";
import styles from "../../styles/styles";
import GlobalHelpers from "../../lib/GlobalHelpers";
import CryptoButton from "../base/CryptoButton";
import getBalance from "../../lib/getBalance";

class BalanceChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Show Balance"
    };
    this.showBalance = this.showBalance.bind(this);
  }

  showBalance() {
    this.setState({ buttonText: "loading..." });
    getBalance(this.props.publicKey, this.props.currency)
      .then(res => {
        this.setState({
          buttonText: `${res.cryptoBalance} ${res.code.toUpperCase()}\n$${
            res.usdBalance
          }`
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ buttonText: "???" });
      });
  }

  render() {
    return (
      <View>
        <CryptoButton
          title={this.state.buttonText}
          onPress={() => this.showBalance()}
        />
      </View>
    );
  }
}

export default BalanceChecker;
