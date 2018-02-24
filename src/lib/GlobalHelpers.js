import { NavigationActions } from "react-navigation";
const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default (GlobalHelpers = {
  windowHeight: height,
  windowWidth: width,
  headerTintColor: "white",
  buttonColor: "#3498db",
  deleteButtonColor: "#FF4136",
  secondaryButtonColor: "#5fb724",
  supportedCurrencies: ["ethereum", "dash", "litecoin", "bitcoin", "dogecoin"],
  humanize: str => {
    const frags = str.split("_");
    for (i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(" ");
  },
  createExplorerUrl: (currency, publicKey) => {
    switch (currency) {
      case "bitcoin":
        return `https://blockchain.info/address/${publicKey}`;
      case "litecoin":
        return `https://live.blockcypher.com/ltc/address/${publicKey}`;
      case "ethereum":
        return `https://etherscan.io/address/${publicKey}`;
      case "bitcoin_cash":
        return `https://www.blocktrail.com/BCC/address/${publicKey}`;
      case "dogecoin":
        return `https://dogechain.info/address/${publicKey}`;
      case "dash":
        return `https://live.blockcypher.com/dash/address/${publicKey}`;
      case "neo":
        return `https://neotracker.io/address/${publicKey}`;
      case "nano":
        return `https://www.nanode.co/account/${publicKey}`;
      default:
        return "";
    }
  },
  clearNavStackAndNavigate: (navigationProps, targetRoute, params) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      params: params,
      actions: [NavigationActions.navigate({ routeName: targetRoute })]
    });
    navigationProps.dispatch(resetAction);
  },
  numberWithCommas: x => {
    split = x.toString().split(".");
    split[0] = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return split.join(".");
  }
});
