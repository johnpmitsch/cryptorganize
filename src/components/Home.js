import React from "react";
import { View } from "react-native";
import CryptoList from "./CryptoList";
import styles from "../styles/styles";
import globalHelpers from "../lib/globalHelpers";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Cryptorganize",
    headerStyle: styles.mainHeader,
    headerTintColor: globalHelpers.headerTintColor,
    headerTitleStyle: styles.headerTitle
  };

  render() {
    return (
      <View style={styles.basicContainer}>
        <CryptoList navigation={this.props.navigation} />
      </View>
    );
  }
}
