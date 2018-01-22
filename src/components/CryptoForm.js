import React from "react";
import { Image, View, Picker } from "react-native";
import { Button, FormLabel, FormInput, Text } from "react-native-elements";
import ModalDropdown from "react-native-modal-dropdown";
import cryptoIcons from "../lib/cryptoIcons";
import GlobalHelpers from "../lib/GlobalHelpers";
import { addPublicKey, editPublicKey } from "../lib/StorageHelper";
import styles from "../styles/styles";

const MessageBarManager = require("react-native-message-bar").MessageBarManager;
const MessageBarAlert = require("react-native-message-bar").MessageBar;

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
    this.addKey = this.addKey.bind(this);
    this.editKey = this.editKey.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  componentWillMount() {
    let params = this.props.navigation.state.params;
    // These values are only passed in for editing and
    // are used to fill the form with the initial values
    if (params.name && params.publicKey && params.currency) {
      this.state.name = params.name;
      this.state.publicKey = params.publicKey;
      this.state.currency = params.currency;
      this.originalKey = {
        name: params.name,
        publicKey: params.publicKey,
        currency: params.currency,
        explorerUrl: params.explorerUrl
      };
    }
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
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

  displayError(error) {
    MessageBarManager.showAlert({
      message: `${error}`,
      alertType: "warning",
      duration: 3000
    });
  }

  editKey(originalKey, newKey) {
    editPublicKey(originalKey, newKey)
      .then(key => {
        this.props.navigation.navigate("Main", {
          message: `${key.name} updated`
        });
      })
      .catch(err => {
        this.displayError(err);
      });
  }

  addKey(key) {
    addPublicKey(key)
      .then(key => {
        this.props.navigation.navigate("Main", {
          message: `${key.name} saved`
        });
      })
      .catch(err => {
        this.displayError(err);
      });
  }

  addOrUpdateKey(originalKey, newKey) {
    newKey.explorerUrl = this.state.explorerUrl || GlobalHelpers.createExplorerUrl(newKey.currency, newKey.publicKey);
    if (
      originalKey &&
      originalKey.name &&
      originalKey.publicKey &&
      originalKey.currency
    ) {
      this.editKey(originalKey, newKey);
    } else {
      this.addKey(newKey);
    }
  }

  static navigationOptions = {
    title: "New Public Key",
    headerStyle: styles.mainHeader,
    headerTintColor: GlobalHelpers.headerTintColor,
    headerTitleStyle: styles.headerTitle
  };

  render() {
    const { params } = this.props.navigation.state;
    // Check for params passed in for editing a key
    const newKey = {
      name: this.state.name,
      publicKey: this.state.publicKey,
      currency: this.state.currency,
      explorerUrl: this.state.explorerUrl
    };

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
        {this.state.showCurrencies &&
          <Picker
            mode="dropdown"
            style={styles.currencyPicker}
            selectedValue={this.state.currency}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ currency: itemValue });
            }}
          >
            {Object.keys(cryptoIcons).map(key =>
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
              source={cryptoIcons[params.currency || this.state.currency]}
              resizeMode="contain"
            />
          </View>}
        {this.state.currency === "other" &&
          <View>
            <FormLabel>Explorer URL (optional)</FormLabel>
            <FormInput
              placeholder="https://myspecialcoin.info/address/DFhECeqi4J7wHJyS76rePMabyQU3m5ZQ1o"
              value={this.state.explorerUrl}
              onChangeText={text => {
                this.setState({ explorerUrl: text });
              }}
            />
          </View>}
        <Button
          title="Submit"
          style={styles.submitKeyButton}
          borderRadius={5}
          backgroundColor={GlobalHelpers.buttonColor}
          onPress={() => {
            this.addOrUpdateKey(this.originalKey, newKey);
          }}
        />
        <MessageBarAlert ref="alert" />
      </View>
    );
  }
}

export default CryptoForm;
