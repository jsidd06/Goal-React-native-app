import { useState } from "react";
import { StyleSheet, TextInput,View,Button} from "react-native";


function DataItem(props) {
const [userText, setUserText] = useState("");

    const addTextUser = (enterData) => {
      setUserText(enterData);
    };

    const clickAddGoalHandler = () => {
        props.addAllGoal(userText);
        setUserText("");
    }
  return (
    <View style={styles.inputObject}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Your life Goals"
        onChangeText={addTextUser}
        value={userText}
      />
      <Button title="Add Goal" onPress={clickAddGoalHandler} />
    </View>
  );
}
export default DataItem;

const styles = StyleSheet.create({
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
});