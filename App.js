import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from './components/CustomButton';
import Counter from './components/Counter';
import LiveInput from './components/LiveInput';

export default function App() {
  const handlePress = () => { alert('Hello Nirmal! 👋'); };

  return (
    <View style={styles.container}>
      <CustomButton style={styles.button} title="Click me" onPress = {handlePress}/>
      <Counter/>
      <LiveInput/>
      <Text style={styles.title}>Hello! 👋</Text>

      <Text style={styles.name}>Nirmal Fernando</Text>

      <Text style={styles.details}>
        BSc Computer Science (Hons)
      </Text>

      <Text style={styles.details}>
        University of Jaffna
      </Text>

      <Text style={styles.details}>
        3rd Year Undergraduate
      </Text>

      <Text style={styles.details}>
        Aspiring ML & Computer Vision Engineer
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 15,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  details: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
});

