import React, { useReducer } from "react";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import axios from "axios";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  CLEAR_FILTER,
  FILTER_CONTACTS,
  UPDATE_CONTACT,
  LOAD_CONTACTS,
  SET_MESSAGE,
  CLEAR_MESSAGE
} from "../types";
import setAuthToken from "../../utils/setAuthToken";
const ContactState = props => {
  const initialState = {
    contacts: [],
    currentContact: null,
    filtered: null,
    msg: null
  };
  const loadContacts = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get("/api/contacts");
      dispatch({
        type: LOAD_CONTACTS,
        payload: res.data.contacts
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addContact = async contact => {
    const config = {
      headers: {
        "Application-Type": "application/json"
      }
    };
    setAuthToken(localStorage.token);
    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data.contact });
      setMessage("success", res.data.msg);
    } catch (error) {
      console.log(error);
      setMessage("danger", "Cannot add a new contact");
    }
  };
  const deleteContact = async id => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.delete(`/api/contacts/${id}`);
      setMessage("success", res.data.msg);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
      setMessage("danger", error.response.data.msg);
    }
  };
  const setContact = contact => {
    dispatch({ type: SET_CONTACT, payload: contact });
  };
  const clearContact = () => {
    dispatch({ type: CLEAR_CONTACT });
  };
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  const updateContact = async contact => {
    setAuthToken(localStorage.token);
    const config = {
      headers: {
        "Applicatin-Type": "application/json"
      }
    };
    try {
      setMessage("primary", "updating contact");
      const res = await axios.put(
        `/api/contacts/${contact._id}`,
        contact,
        config
      );
      setMessage("success", res.data.msg);
      dispatch({ type: UPDATE_CONTACT, payload: contact });
    } catch (error) {
      setMessage("danger", error.response.data.msg);
    }
  };
  const setMessage = (type, msg) => {
    dispatch({
      type: SET_MESSAGE,
      payload: { type, msg }
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGE
      });
    });
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        addContact,
        deleteContact,
        setContact,
        clearContact,
        filterContacts,
        clearFilter,
        filtered: state.filtered,
        updateContact,
        loadContacts,
        msg: state.msg
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
