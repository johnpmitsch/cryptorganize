import React from "react";
import { View } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import { Linking } from "react-native";
import GlobalHelpers from "../../lib/GlobalHelpers";
import styles from "../../styles/styles";

class BlockChainExplorer extends React.Component {
  render() {
    return (
      <View>
        <Button
          backgroundColor={GlobalHelpers.buttonColor}
          borderRadius={5}
          fontSize={16}
          containerViewStyle={styles.exploreButton}
          icon={{ name: "binoculars", type: "font-awesome" }}
          title="Explore"
          disabled={!this.props.explorerUrl}
          onPress={() => Linking.openURL(this.props.explorerUrl)}
        />
      </View>
    );
  }
}

export default BlockChainExplorer;
