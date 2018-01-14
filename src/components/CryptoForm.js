import React from "react";
import { Image, View, Picker } from "react-native";
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
      currency: "bitcoin",
      publicKey: "",
      name: "",
      explorerUrl: ""
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
        <FormInput
          placeholder="Satoshi's Bitcoin"
          value={this.state.name}
          onChangeText={text => {
            this.setState({ name: text });
          }}
        />

        <FormLabel>Public Key</FormLabel>
        <FormInput
          placeholder="12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX"
          value={this.state.publicKey}
          onChangeText={text => {
            this.setState({ publicKey: text });
          }}
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
            style={styles.currencyPicker}
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
        {this.state.currency !== "" && (
          <View style={styles.centeredContainer}>
            <Image
              style={styles.currencyIconLarge}
              source={cryptoIcons[this.state.currency]}
              resizeMode="contain"
            />
          </View>
        )}
        {this.state.currency === "other" && (
          <View>
            <FormLabel>Explorer URL (optional)</FormLabel>
            <FormInput
              placeholder="https://myspecialcoin.info/address/DFhECeqi4J7wHJyS76rePMabyQU3m5ZQ1o"
              onChangeText={text => {
                this.setState({ explorerUrl: text });
              }}
            />
          </View>
        )}
        <Button
          title="Submit"
          style={styles.submitKeyButton}
          borderRadius={5}
          backgroundColor={globalHelpers.buttonColor}
          onPress={() => {}}
        />
      </View>
    );
  }
}

export default CryptoForm;
