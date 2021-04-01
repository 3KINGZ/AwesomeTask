import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { useSelector, useDispatch } from "react-redux";

import { AuthNavigation, AppNavigation } from "./src/navigation";
import { setUser, setUserRequest } from "./src/actions";

const App = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onAuthStateChanged = (user) => {
    dispatch(setUser(user));
  };

  useEffect(() => {
    dispatch(setUserRequest());
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {state.user ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default App;
