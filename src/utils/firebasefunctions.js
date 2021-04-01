import auth from "@react-native-firebase/auth";

export const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    return error;
  }
};

export const signup = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    return error;
  }
};
