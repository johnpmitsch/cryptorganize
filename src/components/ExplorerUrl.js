import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";

class explorerUrl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FormLabel>Explorer URL (optional)</FormLabel>
        <FormInput
          placeholder="www.myspecialcoin.info/address/DFhECeqi4J7wHJyS76rePMabyQU3m5ZQ1o"
          autoCapitalize="none"
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

export default explorerUrl;
