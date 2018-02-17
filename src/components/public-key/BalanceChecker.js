import React from "react";
import axios from "axios";
import { View } from "react-native";
import { Button } from "react-native-elements";
import styles from "../../styles/styles";
import GlobalHelpers from "../../lib/GlobalHelpers";
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
    this.setState({buttonText: "loading..."})
    getBalance(this.props.publicKey, this.props.currency)
      .then(res => {
        this.setState({ buttonText: `${res.cryptoBalance} ${res.code.toUpperCase()}\n$${res.usdBalance}` });
      })
      .catch(error => {
        this.setState({ buttonText: "???" });
      });
  }

  render() {
    return (
      <View>
          <Button
            backgroundColor="white"
            buttonStyle={{padding: 0, margin: 0}}
            textStyle={styles.blackText}
            fontSize={14}
            title={this.state.buttonText}
            onPress={() => this.showBalance()}
            >
          </Button>
      </View>
    );
  }
}

export default BalanceChecker;
