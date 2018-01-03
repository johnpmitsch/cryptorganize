import { StyleSheet } from "react-native";

const backgroundColor = "white";

const styles = StyleSheet.create({
  publicKeyButton: {
    marginBottom: 10
  },

  mainHeader: {
    backgroundColor: "#3B3738"
  },

  homeContainer: {
    backgroundColor: backgroundColor,
    flex: 1
  },

  aboveListContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },

  publicKeyContainer: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 5
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

  centerText: {
    textAlign: "center"
  }
});

export default styles;
