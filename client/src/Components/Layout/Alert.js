import React, { useContext, Fragment } from "react";
import AlertContext from "../../context/alert/AlertContext";
const Alert = () => {
  const { alert } = useContext(AlertContext);

  if (alert.length > 0) {
    return alert.map(a => (
      <div key={a.id} className={`alert alert-${a.type}`}>
        {a.msg}
      </div>
    ));
  } else {
    return <Fragment></Fragment>;
  }
};

export default Alert;
