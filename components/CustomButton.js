import { Pressable,Text,StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({ 
  button: { 
    backgroundColor: '#007AFF', 
    paddingVertical: 12,
     paddingHorizontal: 30,
     borderRadius: 8,
     marginTop: 20,
     marginBottom:20,
   },
  buttonText: { 
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

  },
});
