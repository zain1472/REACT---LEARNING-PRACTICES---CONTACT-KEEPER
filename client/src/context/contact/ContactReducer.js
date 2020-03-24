import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  UPDATE_CONTACT,
  LOAD_CONTACTS,
  SET_MESSAGE,
  CLEAR_MESSAGE
} from "../types";
const ContactReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_MESSAGE:
      return {
        ...state,
        msg: null
      };
    case SET_MESSAGE:
      return {
        ...state,
        msg: action.payload
      };
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact._id === action.payload._id) {
            return action.payload;
          }
          return contact;
        })
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact._id !== action.payload
        )
      };
    case SET_CONTACT:
      return {
        ...state,
        currentContact: action.payload
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        currentContact: null
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            contact.name.match(regex) ||
            contact.email.match(regex) ||
            contact.phone.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};

export default ContactReducer;
