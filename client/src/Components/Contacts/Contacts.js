import React, { useContext, Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/ContactContext";
import AlertContext from "../../context/alert/AlertContext";
import ContactItem from "./ContactItem";
const Contacts = () => {
  const { setAlert } = useContext(AlertContext);
  const { contacts, filtered, loadContacts, msg } = useContext(ContactContext);
  useEffect(() => {
    loadContacts();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (msg) {
      setAlert(msg.msg, msg.type);
    }
    // eslint-disable-next-line
  }, [msg]);
  if (contacts.length === 0) {
    return <h3>Please add a contact</h3>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered
          ? filtered.map(contact => (
              <CSSTransition key={contact._id} timeout={800} classNames="item">
                <ContactItem key={contact._id} contact={contact}></ContactItem>
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact._id} timeout={800} classNames="item">
                <ContactItem key={contact._id} contact={contact}></ContactItem>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
