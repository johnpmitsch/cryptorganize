import React from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import GlobalHelpers from "../../lib/GlobalHelpers";
import CryptoIcons from "../../lib/CryptoIcons";
import BlockChainExplorer from "./BlockChainExplorer";
import BalanceChecker from "./BalanceChecker";
import styles from "../../styles/styles";

class PublicKey extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const publicKey = this.props.publicKey;
    return (
      <View style={styles.publicKeyContainer}>
        <Text h3>{publicKey.name}</Text>
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
         <View style={styles.centeredContainer}>
           <QRCode
             size={GlobalHelpers.windowWidth * 0.65}
             value={publicKey.publicKey}
           />
           <BlockChainExplorer explorerUrl={publicKey.explorerUrl} />
        </View>
      </View>
    );
  }
}

export default PublicKey;
