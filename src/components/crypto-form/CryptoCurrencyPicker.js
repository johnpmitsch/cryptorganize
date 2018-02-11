import React from "react";
import { Image, View, Picker, Platform, Keyboard } from "react-native";
import { Button } from "react-native-elements";
import CryptoIcons from "../../lib/CryptoIcons";
import styles from "../../styles/styles";

class CryptoCurrencyPicker extends React.Component {
  constructor(props) {
    super(props);
    const ios = Platform.OS === "ios";
    this.state = {
      showCurrencies: !ios,
      ios: ios,
      currency: "bitcoin"
    };
    this.togglePicker = this.togglePicker.bind(this);
    this.getIcon = this.getIcon.bind(this);
  }

  togglePicker() {
    Keyboard.dismiss();
    this.setState({ showCurrencies: !this.state.showCurrencies });
  }

  getIcon() {
    const pickerIcon = this.state.showCurrencies
      ? "expand-less"
      : "expand-more";
    return { name: pickerIcon, color: "grey" };
  }

  render() {
    return (
      <View>
        {this.state.ios &&
          <Button
            iconRight
            title="Currency"
            backgroundColor="white"
            textStyle={styles.currencyButtonText}
            containerViewStyle={styles.currencyButtonContainer}
            iconRight={this.getIcon()}
            onPress={this.togglePicker}
          />}
        {this.state.showCurrencies &&
          <Picker
            mode="dropdown"
            style={styles.currencyPicker}
            selectedValue={this.props.selectedCurrency}
            onValueChange={this.props.onValueChange}
          >
            {Object.keys(CryptoIcons).map(key =>
              <Picker.Item
                label={GlobalHelpers.humanize(key)}
                value={key}
                key={key}
              />
            )}
          </Picker>}

        {this.state.currency !== "" &&
          <View style={styles.centeredContainer}>
            <Image
              style={styles.currencyIconLarge}
              source={
                CryptoIcons[this.props.currency || this.props.selectedCurrency]
              }
              resizeMode="contain"
            />
          </View>}
      </View>
    );
  }
}

export default CryptoCurrencyPicker;
