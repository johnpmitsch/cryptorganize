import React from "react";
import {
  Image,
  View,
  Picker,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Button, FormLabel, FormInput, Text } from "react-native-elements";
import ModalDropdown from "react-native-modal-dropdown";
import GlobalHelpers from "../../lib/GlobalHelpers";
import { addPublicKey, editPublicKey } from "../../lib/StorageHelper";
import CryptoFormInput from "./CryptoFormInput";
import CryptoCurrencyPicker from "./CryptoCurrencyPicker";
import ExplorerUrl from "./ExplorerUrl";
import CryptoIcons from "../../lib/CryptoIcons";
import styles from "../../styles/styles";

const MessageBarManager = require("react-native-message-bar").MessageBarManager;
const MessageBarAlert = require("react-native-message-bar").MessageBar;

class CryptoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "bitcoin",
      publicKey: "",
      name: "",
      explorerUrl: ""
    };
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
      this.state.explorerUrl = params.explorerUrl;

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
        GlobalHelpers.clearNavStackAndNavigate(this.props.navigation, "Main", {
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
        GlobalHelpers.clearNavStackAndNavigate(this.props.navigation, "Main", {
          message: `${key.name} saved`
        });
      })
      .catch(err => {
        this.displayError(err);
      });
  }

  addOrUpdateKey(originalKey, newKey) {
    newKey.explorerUrl =
      this.state.explorerUrl ||
      GlobalHelpers.createExplorerUrl(newKey.currency, newKey.publicKey);
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.basicContainer}>
          <CryptoFormInput
            label="Name"
            placeholder="Satoshi's Bitcoin"
            value={this.state.name}
            onChangeText={text => {
              this.setState({ name: text });
            }}
          />

          <CryptoFormInput
            label="Public Key"
            placeholder="12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX"
            value={this.state.publicKey}
            onChangeText={text => {
              this.setState({ publicKey: text });
            }}
          />

          <CryptoCurrencyPicker
            currency={params.currency}
            selectedCurrency={this.state.currency}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ currency: itemValue });
            }}
          />

          {this.state.currency === "other" &&
            <ExplorerUrl
              value={this.state.explorerUrl}
              onChangeText={text => {
                this.setState({ explorerUrl: text });
              }}
            />}

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
      </TouchableWithoutFeedback>
    );
  }
}

export default CryptoForm;
