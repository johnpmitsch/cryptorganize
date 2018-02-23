import React from "react";
import { View } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import { Linking } from "react-native";
import GlobalHelpers from "../../lib/GlobalHelpers";
import CryptoButton from "../base/CryptoButton";
import styles from "../../styles/styles";

class BlockChainExplorer extends React.Component {
  render() {
    return (
      <View>
        <CryptoButton
          icon={{ name: "binoculars", type: "font-awesome" }}
          title="Explore"
          containerViewStyle={styles.exploreButton}
          disabled={!this.props.explorerUrl}
          onPress={() => Linking.openURL(this.props.explorerUrl)}
        />
      </View>
    );
  }
}

export default BlockChainExplorer;
