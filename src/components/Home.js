import React from "react";
import { View } from "react-native";
import { Header, Text } from "react-native-elements";
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
        <View style={styles.titleContainer}>
          <Text style={styles.homeTitle}>Public Keys</Text>
        </View>
        <CryptoList navigation={this.props.navigation} />
      </View>
    );
  }
}