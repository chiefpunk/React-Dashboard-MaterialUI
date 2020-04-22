import { createAction } from "redux-actions";
const actions = {
  LOGIN_REQUEST: "authReducer/LOGIN_REQUEST",
  LOGIN_SUCCESS: "authReducer/LOGIN_SUCCESS",
  LOGIN_FAILED: "authReducer/LOGIN_FAILED",
  LOGOUT_REQUEST: "authReducer/LOGOUT_REQUEST",

  login: (username, password) => ({
    type: actions.LOGIN_REQUEST,
    payload: { username, password },
  }),
  loginSuccess: (username) => ({
    type: actions.LOGIN_SUCCESS,
    payload: { username },
  }),
  loginFailed: () => ({ type: actions.LOGIN_FAILED }),
  logout: () => ({ type: actions.LOGOUT_REQUEST }),
};
export default actions;
