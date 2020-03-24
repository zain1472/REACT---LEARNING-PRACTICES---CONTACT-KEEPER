import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/AlertContext";
import AuthContext from "../../context/auth/AuthContext";
const Register = props => {
  const { registerUser, error, loadUser, isAuthenticated } = useContext(
    AuthContext
  );
  const { setAlert } = useContext(AlertContext);
  useEffect(() => {
    if (error === "The email address has already been registered") {
      setAlert(error, "danger");
    }
    if (isAuthenticated) {
      props.history.push("/");
      setAlert("You have been logged in successfully", "success");
    }
    // eslint-disable-next-line
  }, [error]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert(
        "Both password field must match, Please confirm the password",
        "danger",
        4000
      );
      setUser({ ...user, password: "", password2: "" });
    } else {
      setAlert("Registering your new account , Please wait", "success", 3000);
      registerUser({
        username: name,
        email,
        password
      });
      loadUser();
    }
  };
  const { name, email, password, password2 } = user;
  return (
    <div className="form-container">
      <h2>
        Account <span className="text-primary">Registration</span>
      </h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="" htmlFor="name">
            Enter name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter Email Address</label>
          <input
            type="email"
            name="email"
            id=""
            value={email}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            name="password"
            id=""
            value={password}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id=""
            value={password2}
            required
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register Account"
          className="btn btn-block btn-primary"
        />
        <p className="text-light text-center">
          Already have an account <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
