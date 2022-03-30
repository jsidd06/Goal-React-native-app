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
        <Image
          style={styles.image}
          source={require("../assets/Images/goal.png")}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Add Your Life Goals here...."
          onChangeText={addTextUser}
          value={userText}
          color="#ffffff"
          maxLength={50}
          placeholderTextColor="black"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color="#8479E1"
              onPress={clickAddGoalHandler}
              disabled={userText.length === 0}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#F24A72"
              onPress={props.onAddCancel}
            />
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
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    borderRadius: 7,
    padding: 8,
    color: "#311b6b",
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