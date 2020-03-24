import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
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

export default Login;
