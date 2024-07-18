import { Container } from "lucide-react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "#333333",
    marginBottom: 5,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#454545",
  },
  completedCard: {
    backgroundColor: "#262626",
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
  completedText: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});
