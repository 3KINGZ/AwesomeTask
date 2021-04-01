import * as types from "./types";

export const setUserRequest = () => {
  return { type: types.SET_USER.REQUEST };
};

export const setUser = (user) => {
  return { type: types.SET_USER.SUCCESS, payload: user };
};

export const setUserFailure = (message) => {
  return { type: types.SET_USER.FAILURE, payload: message };
};

export const logoutUser = () => {
  return { type: types.LOGOUT_USER.SUCCESS };
};
