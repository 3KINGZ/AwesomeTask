import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../config/colors";

export const Input = ({ ...otherProps }) => {
  return (
    <TextInput
      style={styles.input}
      {...otherProps}
      placeholderTextColor="#eaeaea"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 30,
    borderWidth: 3,
    borderColor: colors.gold,
    marginVertical: 10,
    fontSize: 22,
    paddingLeft: 20,
    color: colors.whiteText,
  },
});
