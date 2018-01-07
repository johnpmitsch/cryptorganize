import React from "react";
import { View } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import { Linking } from "react-native";
import globalVars from "../lib/globalVars";
import styles from "../styles/styles";

class BlockChainExplorer extends React.Component {
  explorerUrl(currency, publicKey) {
    switch (currency) {
      case "bitcoin":
        return `https://blockchain.info/address/${publicKey}`;
      case "litecoin":
        return `https://live.blockcypher.com/ltc/address/${publicKey}`;
      case "ethereum":
        return `https://etherscan.io/address/${publicKey}`;
      case "bitcoin_cash":
        return `https://www.blocktrail.com/BCC/address/${publicKey}`;
      default:
        return null;
    }
  }

  render() {
    return (
      <View>
        <Button
          backgroundColor={globalVars.buttonColor}
          borderRadius={5}
          fontSize={16}
          containerViewStyle={styles.exploreButton}
          icon={{ name: "binoculars", type: "font-awesome" }}
          title="Explore"
          onPress={() =>
            Linking.openURL(
              this.explorerUrl(this.props.currency, this.props.publicKey)
            )
          }
          backgroundColor={globalVars.buttonColor}
        />
      </View>
    );
  }
}

export default BlockChainExplorer;
