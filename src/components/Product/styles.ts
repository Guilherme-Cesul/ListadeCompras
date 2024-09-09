import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#808080",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginHorizontal: 4
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  quantity: {
    fontSize: 16,
    paddingRight: 16

  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#E23C44",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",

  },
});
