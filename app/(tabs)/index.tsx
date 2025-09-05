import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>🚀 Hello from HEG Ltd.</Text>
      <Button title="Sign in" onPress={() => alert("Hi 👋")} />
      {/* Simple navigation to the next step */}
      <Link href="/(tabs)/Profile" style={styles.link}>
        Go to Profile →
      </Link>
      <Link href="/(tabs)/Leave Request" style={styles.link}>
        Request a Leave →
      </Link>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, justifyContent: "center", 
    alignItems: "center", 
    padding: 15, backgroundColor: "#68F2C8" 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "700", 
    marginBottom: 16 
  },
  link: { 
    marginTop: 16, 
    fontSize: 16, 
    textDecorationLine: "underline" 
  },
});
