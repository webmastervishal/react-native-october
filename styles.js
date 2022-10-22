import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    flex: 1,
  },
  todoWrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  listWrapper: {
    backgroundColor: "#eee",
    width: 360,
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
