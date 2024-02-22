import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const EmptyMsg = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    color: Colors.green,
  },
});

export default EmptyMsg;
