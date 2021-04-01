import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../actions";
import { logout } from "../utils/firebasefunctions";

export const Welcome = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);

  const signOut = () => {
    const response = logout();

    response.then((resp) => {
      if (!resp) {
        dispatch(logoutUser());
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {state.user.email}</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    paddingBottom: 10,
  },
});
