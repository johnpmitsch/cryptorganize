import React from "react";
import { View, Image } from "react-native";
import { Text, FormInput } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import GlobalHelpers from "../../lib/GlobalHelpers";
import CryptoIcons from "../../lib/CryptoIcons";
import BlockChainExplorer from "./BlockChainExplorer";
import BalanceChecker from "./BalanceChecker";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import CopyButton from "./CopyButton";
import styles from "../../styles/styles";

class PublicKey extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const publicKey = this.props.publicKey;
    return (
      <View style={styles.publicKeyContainer}>
        <Text h3>
          {publicKey.name}
        </Text>
        <View style={styles.inlineContainer}>
          <View style={[styles.halfWidthContainer, styles.smallPadding]}>
            <Image
              style={styles.cryptoIcon}
              source={CryptoIcons[publicKey.currency]}
              resizeMode="contain"
            />
          </View>
          <View style={styles.halfWidthContainer}>
            {publicKey.currency != "other" &&
              GlobalHelpers.supportedCurrencies.includes(publicKey.currency) &&
              <BalanceChecker
                currency={publicKey.currency}
                publicKey={publicKey.publicKey}
              />}
          </View>
        </View>
        <View style={[styles.centeredContainer, styles.smallSpacing]}>
          <QRCode
            size={GlobalHelpers.windowWidth * 0.5}
            value={publicKey.publicKey}
          />
        </View>
        <View style={styles.centeredContainer}>
          <BlockChainExplorer explorerUrl={publicKey.explorerUrl} />
        </View>
        <View style={styles.inlineContainer}>
          <CopyButton publicKey={publicKey.publicKey} />
          <EditButton
            publicKey={publicKey}
            navigation={this.props.navigation}
          />
          <DeleteButton
            publicKey={publicKey}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}

export default PublicKey;
