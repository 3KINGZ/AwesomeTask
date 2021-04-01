import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { colors } from "../config/colors";

export const Button = ({ title, onPress, loading }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        {loading ? (
          <ActivityIndicator color="black" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.gold,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.blackText,
    fontSize: 22,
  },
});
