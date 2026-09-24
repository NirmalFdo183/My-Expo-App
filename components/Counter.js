import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count : {count}</Text>
        <View style={styles.buttonRow}>
            <Pressable style={styles.counterButton} onPress={() => setCount(count - 1)}>
                <Text style={styles.buttonText}>−</Text>
            </Pressable>

            <Pressable style={styles.counterButton} onPress={() => setCount(count + 1)}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>

        <Pressable style={styles.resetButton} onPress={() => setCount(0)}>
            <Text style={styles.resetText}>Reset</Text>
        </Pressable>
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

  buttonRow: {
    flexDirection: "row",
    gap: 15,
  },

  counterButton: {
    width: 60,
    height: 60,
    backgroundColor: "#1761b1",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  resetButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#555",
    borderRadius: 8,
  },

  resetText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
