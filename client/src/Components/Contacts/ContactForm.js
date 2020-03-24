import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const {
    addContact,
    currentContact,
    clearContact,
    updateContact
  } = contactContext;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  const [showClear, setShowClear] = useState(false);
  useEffect(() => {
    if (currentContact != null) {
      setContact(currentContact);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, currentContact]);
  useEffect(() => {
    if (
      contact.name !== "" ||
      contact.email !== "" ||
      contact.phone !== "" ||
      contact.type !== "personal"
    ) {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
  }, [contact]);
  const onSubmit = e => {
    e.preventDefault();
    if (currentContact !== null) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
    clearContact();
  };
  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const { name, email, phone, type } = contact;
  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          required
          autoComplete="off"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          id=""
          autoComplete="off"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        <input
          type="text"
          name="phone"
          autoComplete="off"
          id=""
          value={phone}
          placeholder="Phone"
          onChange={onChange}
        />
        <select name="type" value={type} id="" onChange={onChange}>
          <option value="professional">Professional</option>
          <option value="personal">Personal</option>
        </select>
        <button className="btn btn-block btn-primary my-1">
          {currentContact ? "Update " : "Add "} Contact
        </button>
      </form>
      {showClear && (
        <button
          className="btn btn-block btn-light my-1"
          onClick={() => clearContact()}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default ContactForm;
