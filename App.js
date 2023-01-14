import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './src';
import Person1 from './src/person1';
import Person2 from './src/person2';

export default function App() {
  return (
    <View style={styles.container}>
   <Person1 />
   <Person2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
});