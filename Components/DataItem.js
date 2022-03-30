import { StyleSheet, Text, View, Pressable } from "react-native";

function DataItem(props) {
  return (
    <Pressable onPress={props.onClickDelete.bind(this, props.id)}>
      <View style={styles.goalStyleText}>
        <Text style={styles.goalDataText}>{props.data}</Text>
      </View>
    </Pressable>
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
