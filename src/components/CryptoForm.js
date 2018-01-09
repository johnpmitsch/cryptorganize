import React from "react";
import { View, Picker } from "react-native";
import { Button, FormLabel, FormInput, Text } from "react-native-elements";
import ModalDropdown from "react-native-modal-dropdown";
import cryptoIcons from "../lib/cryptoIcons";
import globalHelpers from "../lib/globalHelpers";
import styles from "../styles/styles";

class CryptoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoIcons: cryptoIcons,
      showCurrencies: false,
      currency: ""
    };
    this.togglePicker = this.togglePicker.bind(this);
    this.getIcon = this.getIcon.bind(this);
  }

  getIcon() {
    const pickerIcon = this.state.showCurrencies
      ? "expand-less"
      : "expand-more";
    return { name: pickerIcon, color: "grey" };
  }

  togglePicker() {
    this.setState({ showCurrencies: !this.state.showCurrencies });
  }

  static navigationOptions = {
    title: "New Public Key",
    headerStyle: styles.mainHeader,
    headerTintColor: globalHelpers.headerTintColor,
    headerTitleStyle: styles.headerTitle
  };

  render() {
    return (
      <View style={styles.basicContainer}>
        <FormLabel>Name</FormLabel>
        <FormInput placeholder="Satoshi's Bitcoin" onChangeText={() => {}} />

        <FormLabel>Public Key</FormLabel>
        <FormInput
          placeholder="12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX"
          onChangeText={() => {}}
        />

        <Button
          iconRight
          title="Currency"
          backgroundColor="white"
          textStyle={styles.currencyButtonText}
          containerViewStyle={styles.currencyButtonContainer}
          iconRight={this.getIcon()}
          onPress={this.togglePicker}
        />
        {this.state.showCurrencies && (
          <Picker
            mode="dropdown"
            selectedValue={this.state.currency}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ currency: itemValue })
            }
          >
            {Object.keys(cryptoIcons).map(key => (
              <Picker.Item
                label={globalHelpers.humanize(key)}
                value={key}
                key={key}
              />
            ))}
          </Picker>
        )}
        <Button title="Submit" onPress={() => {}} />
      </View>
    );
  }
}

export default CryptoForm;
