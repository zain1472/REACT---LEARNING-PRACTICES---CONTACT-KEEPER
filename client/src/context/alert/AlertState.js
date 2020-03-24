import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../types";
const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid.v4();
    const alert = {
      msg,
      type,
      id
    };
    dispatch({
      type: SET_ALERT,
      payload: alert
    });
    setTimeout(function() {
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      });
    }, timeout);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
