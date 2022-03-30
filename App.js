import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [userText, setUserText] = useState("");
  const [currentText, setCurrentText] = useState([]);
  const addTextUser = (enterData) => {
    setUserText(enterData);
  };
  const handleAddClick = () => {
    setCurrentText((addNewData) => [
      ...addNewData,
      { text: userText, id: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputObject}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Your life Goals"
          onChangeText={addTextUser}
        />
        <Button title="Add Goal" onPress={handleAddClick} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={currentText}
          renderItem={(goalData) => {
            return (
              <View style={styles.goalStyleText}>
                <Text style={styles.goalDataText}>{goalData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputObject: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    width: "70%",
    marginRight: 8,
  },
  goalContainer: {
    flex: 5,
  },
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
