import React, { useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";
const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  const { deleteContact, setContact, clearContact } = useContext(
    ContactContext
  );
  const onDelete = () => {
    deleteContact(id);
    clearContact();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-left text-primary">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="my-1">
        <li>
          {email && (
            <p>
              <i className="fas fa-envelope-open"></i>
              {" " + email}
            </p>
          )}
        </li>
        <li>
          {phone && (
            <p>
              <i className="fas fa-phone"></i>
              {" " + phone}
            </p>
          )}
        </li>
      </ul>
      <div className="my-1">
        <div className="btn btn-dark" onClick={() => setContact(contact)}>
          Edit
        </div>
        <div className="btn btn-danger" onClick={onDelete}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
