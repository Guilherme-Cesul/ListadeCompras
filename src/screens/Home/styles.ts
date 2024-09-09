import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#7A4A9E",
    alignItems: "center",
    justifyContent: "center",
    height: 173,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F2F2F2",
  },
  mainContainer: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: -30,
    position: "relative",
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    maxWidth: 340,
    height: 54,
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#808080",
    borderRadius: 6,
    backgroundColor: "#F9F9F9",
    fontSize: 16,
    fontWeight: "400",
    marginRight: 4,
  },

  inputQuantity: {
    maxWidth: 125,
    height: 54,
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#808080",
    borderRadius: 6,
    backgroundColor: "#F9F9F9",
    fontSize: 16,
    fontWeight: "400",
    marginRight: 4,
  },
  button: {
    backgroundColor: "#31C667",
    width: 52,
    height: 52,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitleText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
  },
  emptyListContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
    height: 350,
  },
  list: {
    justifyContent: "center",
    borderTopColor: "#D9D9D9",
    borderStyle: "solid",
    borderTopWidth: 1,
  },
  boldText: {
    color: "#808080",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
  },
});
