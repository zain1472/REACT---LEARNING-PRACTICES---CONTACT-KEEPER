import React, { useContext } from "react";
import Contacts from "../Contacts/Contacts";
import Filter from "../Contacts/Filter";
import ContactForm from "../Contacts/ContactForm";
import ContactContext from "../../context/contact/ContactContext";

const Home = () => {
  const { currentContact } = useContext(ContactContext);
  return (
    <div className="grid-2">
      <div>
        <h2 className="text-primary">
          {currentContact ? "Update " : "Add "} Contact
        </h2>
        <ContactForm />
      </div>
      <div>
        <Filter />

        <Contacts />
      </div>
    </div>
  );
};

export default Home;
