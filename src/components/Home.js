import React from "react";
import { View } from "react-native";
import { Header, Text } from "react-native-elements";
import CryptoList from "./CryptoList";
import styles from "../styles/styles";
import globalVars from "../helpers/globalVars";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Cryptorganize",
    headerStyle: styles.mainHeader,
    headerTintColor: globalVars.headerTintColor
  };

  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.titleContainer}>
          <Text h3 style={styles.centerText}>
            Public Keys
          </Text>
        </View>
        <CryptoList navigation={this.props.navigation} />
      </View>
    );
  }
}
