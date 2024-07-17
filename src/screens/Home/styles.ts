import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  containerVerticalSpace: {
    paddingHorizontal: 24,
  },
  logoBox: {
    width: "100%",
    height: 173,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
    zIndex: 0,
  },
  logoImage: {
    width: 110.34,
    height: 32,
    resizeMode: "contain",
  },
  listImage: {
    width: 56,
    height: 56,
    resizeMode: "contain",
    marginTop: 40,
    marginBottom: 10,
  },
  form: {
    marginTop: -25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    flex: 1,
    //width: "100%",
    height: 54,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderRadius: 6,
    color:"#F2F2F2",
    backgroundColor: "#262626",
    marginEnd: 4,
    paddingLeft: 16,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  progress: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    paddingBottom: 20,
  },
  progressTextCreate: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  progressTextCompleted: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
    marginStart: 150,
  },
  count: {
    width: 25,
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingLeft: 5,
    marginTop: 2,
  },
  countText: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },
  EmptyText: {
    flex: 1,
    flexDirection: "column",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },
  listEmptyTextBold: {
    fontWeight: "bold",
    color: "#808080",
  },
  listEmptyTextRegular: {
    color: "#808080",
  },
});
