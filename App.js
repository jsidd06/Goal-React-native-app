import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputObject}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Your life Goals"
        />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal : 16,
  },
  inputObject:{
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"
  },
  textInputStyle:{
    borderWidth:1,
    borderColor:"#cccccc",
    padding:8,
    width:"70%",
    marginRight : 8,
  },
    goalContainer: {
      flex : 5,
  }
});
