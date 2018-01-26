import React from "react";
import { StatusBar, View } from "react-native";
import CryptoList from "./CryptoList";
import styles from "../styles/styles";
import GlobalHelpers from "../lib/GlobalHelpers";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Cryptorganize",
    headerStyle: styles.mainHeader,
    headerTintColor: GlobalHelpers.headerTintColor,
    headerTitleStyle: styles.headerTitle
  };

  render() {
    return (
      <View style={styles.basicContainer}>
        <StatusBar barStyle='light-content' backgroundColor="black"/>
        <CryptoList navigation={this.props.navigation} />
      </View>
    );
  }
}
