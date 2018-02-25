import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";

class CryptoFormInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FormLabel>
          {this.props.label}
        </FormLabel>
        <FormInput
          placeholder={this.props.placeholder}
          autoCapitalize="none"
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

export default CryptoFormInput;
