import React from "react";
import { StatusBar, View, Keyboard } from "react-native";
import { AppLoading, Asset, Font } from 'expo';
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

  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => {
    // add assets that need to be preloaded
    return Promise.all([]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.basicContainer}>
          <StatusBar barStyle="light-content" backgroundColor="black" />
          <CryptoList navigation={this.props.navigation} />
        </View>
      );
    }
  }
}
