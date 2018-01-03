import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainHeader: {
    backgroundColor: "#3B3738"
  },

  homeContainer: {
    backgroundColor: "white",
    flex: 1
  },

  aboveListContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },

  buttonContainer: {
    flex: 1
  },

  searchBar: {
    backgroundColor: "white",
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
