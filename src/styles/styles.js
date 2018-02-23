import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import GlobalHelpers from "../lib/GlobalHelpers";

const backgroundColor = "white";
const defaultSpacing =
  Platform.OS === "ios" ? GlobalHelpers.windowHeight / 16 : 30;
const smallSpacing = GlobalHelpers.windowHeight / 40;

const styles = StyleSheet.create({
  backgroundIcon: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    opacity: 0.2
  },

  cryptoIcon: {
    width: 50,
    height: 50,
    marginRight: 5
  },

  exploreButton: {
    marginTop: smallSpacing,
    marginBottom: smallSpacing
  },

  publicKeyButtonContainer: {
    marginBottom: defaultSpacing
  },

  publicKeyButtonText: {
    textAlign: "center"
  },

  mainHeader: {
    backgroundColor: "#000000"
  },

  headerTitle: {
    fontSize: 20
  },

  basicContainer: {
    backgroundColor: backgroundColor,
    flex: 1
  },

  cryptoListContainer: {
    paddingBottom: 20,
    alignItems: "center"
  },

  inlineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },

  publicKeyContainer: {
    height: GlobalHelpers.windowHeight * 0.65,
    width: GlobalHelpers.windowWidth * 0.95,
    marginTop: 5,
    marginBottom: defaultSpacing
  },

  halfWidthContainer: {
    width: GlobalHelpers.windowWidth * 0.5
  },

  smallPadding: {
    padding: GlobalHelpers.windowWidth * 0.03
  },

  buttonContainer: {
    flex: 1
  },

  searchBar: {
    backgroundColor: backgroundColor,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  titleContainer: {
    padding: 5
  },

  currencyButtonContainer: {
    marginTop: smallSpacing,
    marginBottom: smallSpacing
  },

  currencyButtonText: {
    backgroundColor: backgroundColor,
    color: "grey"
  },

  homeTitle: {
    textAlign: "center",
    fontSize: 20
  },

  currencyIconLarge: {
    width: 75,
    height: 75,
    marginBottom: 25
  },

  centeredContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  submitKeyButton: {
    marginTop: smallSpacing
  }
});

export default styles;
