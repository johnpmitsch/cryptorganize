import React from "react";
import { View } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import { Linking } from "react-native";
import GlobalHelpers from "../lib/GlobalHelpers";
import styles from "../styles/styles";

class BlockChainExplorer extends React.Component {
  render() {
    return (
      <View>
        {this.props.explorerUrl && <Button
          backgroundColor={GlobalHelpers.buttonColor}
          borderRadius={5}
          fontSize={16}
          containerViewStyle={styles.exploreButton}
          icon={{ name: "binoculars", type: "font-awesome" }}
          title="Explore"
          onPress={() =>
            Linking.openURL(
              this.props.explorerUrl
            )}
          backgroundColor={GlobalHelpers.buttonColor}
        />}
      </View>
    );
  }
}

export default BlockChainExplorer;
