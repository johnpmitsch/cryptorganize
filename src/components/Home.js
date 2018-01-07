import React from "react";
import { View } from "react-native";
import { Header, Text } from "react-native-elements";
import CryptoList from "./CryptoList";
import styles from "../styles/styles";
import globalVars from "../lib/globalVars";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Cryptorganize",
    headerStyle: styles.mainHeader,
    headerTintColor: globalVars.headerTintColor,
    headerTitleStyle: styles.headerTitle
  };

  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.titleContainer}>
          <Text h4 style={styles.centerText}>
            Public Keys
          </Text>
        </View>
        <CryptoList navigation={this.props.navigation} />
      </View>
    );
  }
}
