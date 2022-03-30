import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import DataItem from "./Components/DataItem";
import DataInput from "./Components/DataInput";

export default function App() {
  const [currentText, setCurrentText] = useState([]);
  
  const handleAddClick = (userText) => {
    setCurrentText((addNewData) => [
      ...addNewData,
      { text: userText, id: Math.random().toString() },
    ]);
  };

  const handleDeleteClick = (id) => {
    setCurrentText((addNewData) => {
      return addNewData.filter((data) => data.id != id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <DataInput addAllGoal={handleAddClick} />
      <View style={styles.goalContainer}>
        <FlatList
          data={currentText}
          renderItem={(goalData) => {
            return <DataItem data={goalData.item.text} onClickDelete={handleDeleteClick} id={goalData.item.id} />;
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
  goalContainer: {
    flex: 5,
  },
  
});
