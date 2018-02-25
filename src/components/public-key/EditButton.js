import React from "react";
import { View } from "react-native";
import CryptoButton from "../base/CryptoButton";
import styles from "../../styles/styles";

class EditButton extends React.Component {
  render() {
    const publicKey = this.props.publicKey;
    return (
      <View>
        <CryptoButton
          icon={{ name: "pencil-square-o", type: "font-awesome" }}
          title="Edit"
          onPress={() =>
            this.props.navigation.navigate("CryptoForm", {
              name: publicKey.name,
              publicKey: publicKey.publicKey,
              currency: publicKey.currency,
              explorerUrl: publicKey.explorerUrl
            })}
        />
      </View>
    );
  }
}

export default EditButton;
