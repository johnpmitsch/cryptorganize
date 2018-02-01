import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import GlobalHelpers from "../lib/GlobalHelpers";

const backgroundColor = "white";
const defaultSpacing = Platform.OS === "ios" ? GlobalHelpers.windowHeight/16 : 30;
const smallSpacing = GlobalHelpers.windowHeight/40;

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
    width: 25,
    height: 25,
    marginRight: 5
  },

  exploreButton: {
    marginTop: defaultSpacing,
    marginBottom: smallSpacing
  },

  publicKeyButton: {
    marginBottom: defaultSpacing
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

  inlineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },

  publicKeyContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center"
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
