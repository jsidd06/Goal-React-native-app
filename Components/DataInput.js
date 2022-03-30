import { useState } from "react";
import { StyleSheet, TextInput,View,Button,Modal,Image} from "react-native";


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
        <Image style={styles.image} source={require('../assets/Images/goal.png')} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Your life Goals"
          onChangeText={addTextUser}
          value={userText}
          color="#ffffff"
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
            <Button title="Cancel" color="#F24A72" onPress={props.onAddCancel} />
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
    backgroundColor: "#311b6b",
    padding: 20,
  },
  image : {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    padding: 8,
    marginTop: 8,
  },
});