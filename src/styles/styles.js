import { StyleSheet } from "react-native";

const backgroundColor = "white";

const styles = StyleSheet.create({
	backgroundIcon: {
		flex: 1,
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		opacity: 0.2,
	},

  cryptoIcon: {
    width: 25,
    height: 25,
    marginRight: 5
  },

  exploreButton: {
    marginTop: 50
  },

  publicKeyButton: {
    marginBottom: 50
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
