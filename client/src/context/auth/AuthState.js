import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "../types";
import setAuthToken from "../../utils/setAuthToken";
const AuthState = props => {
  const initialState = {
    user: null,
    isAuthenticated: null,
    error: null,
    loading: true,
    token: null
  };
  const registerUser = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/users/", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };
  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data.user
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERROR
      });
    }
  };
  const loginUser = async user => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/auth", user, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token
      });
      localStorage.setItem("token", res.data.token);
      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg
      });
      setAuthToken();
    }
  };
  const logoutUser = () => {
    dispatch({
      type: LOGOUT
    });
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        loading: state.loading,
        registerUser,
        loadUser,
        loginUser,
        logoutUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
