import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View>
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
    padding: 10,
  },
});
