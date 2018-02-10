import React from "react";
import axios from "axios";
import { View } from "react-native";
import { Text } from "react-native-elements";
import GlobalHelpers from "../lib/GlobalHelpers";
import getBalance from "../lib/getBalance";

class BalanceChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "balance": null
    }
  }

  componentDidMount() {
    getBalance(this.props.publicKey, this.props.currency).then(balance => {
      console.log("incomponent " + balance);
      this.setState({balance: balance});
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <View>
        <Text h4>${this.state.balance}</Text>
      </View>
    )
  }
}

export default BalanceChecker;
