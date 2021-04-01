import React from "react";
import { Text, StyleSheet } from "react-native";

export const ErrorText = ({ error }) => {
  if (!error) return null;
  return <Text style={styles.text}>{error}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontStyle: "italic",
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
});
