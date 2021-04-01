import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login, Signup } from "../screens";

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
