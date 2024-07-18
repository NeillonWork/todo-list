import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "#333333",
    marginBottom: 5,
    padding: 10,
    alignItems: "center",
  },
  cardCircle: {
    padding: 10,
    justifyContent: "center",
  },
  cardTrash: {
    padding: 10,
    justifyContent: "center",
  },
  cardText: {
    flex: 1,
    fontSize: 14,
    color: "#F2F2F2",
  },
});
