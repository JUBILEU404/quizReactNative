import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>A</Text>
      </View>
      <StatusBar style="auto" />
      <View style={{flex: 3, backgroundColor: 'green'}}>
        <Text>B</Text>
      </View>
      <StatusBar style="auto" />
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text>C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
