import { StyleSheet, Text, View } from "react-native";

function DataItem(props) {
  return (
    <View style={styles.goalStyleText}>
      <Text style={styles.goalDataText}>{props.data}</Text>
    </View>
  );
}

export default DataItem;

const styles = StyleSheet.create({
  goalStyleText: {
    backgroundColor: "#333C83",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  goalDataText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
