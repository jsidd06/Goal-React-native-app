import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputObject}>
       <TextInput placeholder="Your life Goals" />
        <Button title="Add Goal" />
     </View>
     <View>
      <Text>List of Goals...</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputObject:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  textInputStyle:{
    borderWidth:1,
    borderColor:"#cccccc",
    padding:10,
    width:"80%",
    marginRight : 10,
  }
});
