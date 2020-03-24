import React, { useContext, useEffect } from "react";
import Contacts from "../Contacts/Contacts";
import Filter from "../Contacts/Filter";
import ContactForm from "../Contacts/ContactForm";
import ContactContext from "../../context/contact/ContactContext";
import AuthContext from "../../context/auth/AuthContext";

const Home = () => {
  const { loadUser } = useContext(AuthContext);
  const { currentContact } = useContext(ContactContext);
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
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
