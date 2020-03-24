import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/AlertContext";
import AuthContext from "../../context/auth/AuthContext";
const Login = props => {
  const { setAlert } = useContext(AlertContext);
  const { error, loginUser, isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
    }
    if (isAuthenticated) {
      props.history.push("/");
      setAlert("You have been logged in successfully", "success");
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    setAlert("Attempting to log you in...", "primary");
    loginUser({ email, password });
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
            minLength="6"
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
