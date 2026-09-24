import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Counter() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Type Something..."
        placeholderTextColor="#888"
        onChangeText={setText}
        value={text}
      />

      <Text style={styles.result}>
        You typed : {text}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },

  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#1761b1",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f5f5f5",
  },

  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#1761b1",
  },
});
