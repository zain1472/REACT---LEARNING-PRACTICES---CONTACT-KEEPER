import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  UPDATE_CONTACT
} from "../types";
const ContactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }
          return contact;
        })
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
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
