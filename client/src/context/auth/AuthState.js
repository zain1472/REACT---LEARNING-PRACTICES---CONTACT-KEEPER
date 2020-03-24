import React, { useReducer } from "react";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "../types";
const ContactState = props => {
  const initialState = {
    user: null,
    isAuthenticated: null,
    error: null,
    loading: false,
    token: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);
  return (
    <ContactContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        loading: state.loading
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
