import * as types from "../actions/types";

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: null,
  message: "",
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_USER.REQUEST:
      return { ...state, loading: true };

    case types.SET_USER.SUCCESS:
      return { ...state, isLoggedIn: true, user: payload, loading: false };

    case types.LOGOUT_USER.SUCCESS:
      return { ...state, isLoggedIn: false, user: null, message: "" };

    case types.SET_USER.FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: payload,
        loading: false,
      };

    case types.LOGOUT_USER.FAILURE:
      return { ...state, isLoggedIn: false, message: payload };

    default:
      return state;
  }
};

export default authReducer;
