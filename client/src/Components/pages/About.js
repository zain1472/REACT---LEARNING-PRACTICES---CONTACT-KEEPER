import React, { Fragment } from "react";

const about = () => {
  return (
    <Fragment>
      <h1>About Contact Keeper</h1>
      <p className="lead">
        Contact Keeper allows you to save all your contacts securely and manage
        them as well...
      </p>
      <p>
        For more details contact the developer @{" "}
        <span className="text-primary">zain.abideen14572@gmail.com</span>
      </p>
      <p className="text-light">
        Version: <span className="text-success">1.0.0</span>
      </p>
    </Fragment>
  );
};

export default about;
