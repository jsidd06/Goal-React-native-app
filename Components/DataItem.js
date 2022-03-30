import { StyleSheet, Text, View, Pressable } from "react-native";

function DataItem(props) {
  return (
    <View style={styles.goalStyleText}>
      <Pressable
        android_ripple={{ color: "#243D25" }}
        onPress={props.onClickDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedData}
      >
        <Text style={styles.goalDataText}>{props.data}</Text>
      </Pressable>
    </View>
  );
}

export default DataItem;

const styles = StyleSheet.create({
  goalStyleText: {
    backgroundColor: "#5F7464",
    borderRadius: 10,
    marginBottom: 8,
    marginTop: 8,
  },
  pressedData: {
    opacity: 0.5,
  },
  goalDataText: {
    color: "#ffffff",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
});
