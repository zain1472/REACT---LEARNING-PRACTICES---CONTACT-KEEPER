import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from "../types";
const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
        loading: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.payload,
        loading: false
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        error: null,
        isAuthenticated: true,
        loading: false,
        token: localStorage.token
      };
    case AUTH_ERROR:
      return {
        ...state,
        user: null,
        error: "Authentication Failed",
        isAuthenticated: null,
        loading: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        isAuthenticated: true,
        token: action.payload,
        loading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        token: null,
        isAuthenticated: null,
        user: null,
        loading: false
      };
    case LOGOUT:
      return {
        ...state,
        error: null,
        token: null,
        isAuthenticated: null,
        user: null,
        loading: false
      };
    default:
      return state;
  }
};

export default AuthReducer;
