import React, { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
        <Text style={styles.countText}>Count : {count}</Text>
            <Button title="Increment" onPress={() => {setCount(count + 1);}}/>
            <Button title="Decrement" onPress={() => {setCount(count - 1);}}/>
            <Button title="Reset" onPress={() => {setCount(0);}}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
    },

    countText: {
        color: "#060505",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
});

