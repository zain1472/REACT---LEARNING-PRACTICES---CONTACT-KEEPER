import React, { useRef, useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";

const Filter = () => {
  const { filterContacts, clearFilter } = useContext(ContactContext);
  const text = useRef("");
  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(text.current.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type="text"
        ref={text}
        id=""
        onChange={onChange}
        placeholder="Filter Contacts..."
      />
    </form>
  );
};

export default Filter;
