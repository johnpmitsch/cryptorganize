import React from "react";
import axios from "axios";
import { View } from "react-native";
import { Button } from "react-native-elements";
import styles from "../../styles/styles";
import GlobalHelpers from "../../lib/GlobalHelpers";
import CryptoButton from "../base/CryptoButton";
import getBalance from "../../lib/getBalance";

const balanceButtonText = "Show Balance";

class BalanceChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: balanceButtonText,
      balanceShowing: false
    };
    this.showBalance = this.showBalance.bind(this);
    this.handleBalance = this.handleBalance.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ buttonText: balanceButtonText });
    this.setState({ balanceShowing: false });
  }

  handleBalance() {
    if (this.state.buttonText === balanceButtonText) {
      this.showBalance();
    } else {
      this.setState({
        buttonText: balanceButtonText,
        balanceShowing: false
      });
    }
  }

  showBalance() {
    this.setState({ buttonText: "loading..." });
    getBalance(this.props.publicKey, this.props.currency)
      .then(res => {
        this.setState({
          buttonText: `${res.cryptoBalance} ${res.code.toUpperCase()}\n$${res.usdBalance}`,
          balanceShowing: true
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ buttonText: "???" });
      });
  }

  render() {
    // override button style when balance is showing to remove
    // button borders
    const buttonStyle = this.state.balanceShowing ? {} : null;
    return (
      <View>
        <CryptoButton
          title={this.state.buttonText}
          buttonStyle={buttonStyle}
          onPress={() => this.handleBalance()}
        />
      </View>
    );
  }
}

export default BalanceChecker;
