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
  const { email, password } = user;
  return (
    <div className="form-container">
      <h2>
        Account <span className="text-primary">Login</span>
      </h2>
      <form onSubmit={onSubmit}>
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

        <input
          type="submit"
          value="Sign In"
          className="btn btn-block btn-primary"
        />
        <p className="text-light text-center">
          Don't have an account <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
