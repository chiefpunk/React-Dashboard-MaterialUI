import { handleActions } from "redux-actions";
import actions from "./actions";
const initialState = {
  username: null,
  isLoggedIn: false,
  isFailed: false,
};

const authReducer = handleActions(
  {
    [actions.LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      username: action.payload.username,
      isLoggedIn: true,
      isFailed: false,
    }),

    [actions.LOGOUT_REQUEST]: (state, action) => ({
      ...state,
      isLoggedIn: false,
      isFailed: false,
    }),
    [actions.LOGIN_FAILED]: (state, action) => ({
      ...state,
      isLoggedIn: false,
      isFailed: true,
    }),
  },
  initialState
);

export default authReducer;
