import React, { useReducer } from "react";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  CLEAR_FILTER,
  FILTER_CONTACTS,
  UPDATE_CONTACT
} from "../types";
const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: "1",
        name: "zain ali",
        phone: "",
        email: "zain.abideen14572@gmail.com",
        type: "personal"
      },
      {
        id: "2",
        name: "Hamid ali",
        phone: "03074065012",
        email: "zain.ali@gmail.com",
        type: "personal"
      },
      {
        id: "3",
        name: "Ali Ahmed",
        phone: "03074065012",
        email: "zain.abideen14572@gmail.com",
        type: "personal"
      },
      {
        id: "4",
        name: "Ahmer",
        email: "ahmer@hotmail.com",
        phone: "03074065012",
        type: "professional"
      }
    ],
    currentContact: null,
    filtered: null
  };
  const addContact = contact => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
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
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
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
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
