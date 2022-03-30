import { useState } from "react";
import { StyleSheet, TextInput,View,Button,Modal} from "react-native";


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
    <Modal animationType="slide" visible={props.showModal}>
      <View style={styles.inputObject}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Your life Goals"
          onChangeText={addTextUser}
          value={userText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#8479E1"
              onPress={clickAddGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#F24A72" onPress={props.closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default DataItem;

const styles = StyleSheet.create({
  inputObject: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    width: "80%",
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    padding: 8,
    marginTop: 8,
  },
});