import React from "react";
import { View, Alert } from "react-native";
import { Button } from "react-native-elements";
import GlobalHelpers from "../../lib/GlobalHelpers";
import CryptoButton from "../base/CryptoButton";
import { deletePublicKey } from "../../lib/StorageHelper";

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.removeKey = this.removeKey.bind(this);
    this.confirmDeletion = this.confirmDeletion.bind(this);
  }

  removeKey(publicKey) {
    const key = {
      name: publicKey.name,
      publicKey: publicKey.publicKey,
      currency: publicKey.currency
    };
    deletePublicKey(key)
      .then(key => {
        const message = `${key.name} removed`;
        GlobalHelpers.clearNavStackAndNavigate(this.props.navigation, "Main", {
          message: message
        });
      })
      .catch(err => {
        const message = `Error removing ${key}`;
        GlobalHelpers.clearNavStackAndNavigate(this.props.navigation, "Main", {
          message: message,
          messageType: "error"
        });
      });
  }

  confirmDeletion(publicKey) {
    Alert.alert(
      "Confirm Deletion",
      `Are you sure you want to delete ${publicKey.name}?`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Delete", onPress: () => this.removeKey(publicKey) }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View>
        <CryptoButton
          icon={{ name: "trash", type: "font-awesome" }}
          title="Delete"
          color="red"
          onPress={() => this.confirmDeletion(this.props.publicKey)}
        />
      </View>
    );
  }
}

export default DeleteButton;
