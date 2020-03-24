import React, { useContext, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h3>Please add a contact</h3>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={800} classNames="item">
                <ContactItem key={contact.id} contact={contact}></ContactItem>
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={800} classNames="item">
                <ContactItem key={contact.id} contact={contact}></ContactItem>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
