import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

import { Redirect } from "react-router-dom";
import './LoginForm.css';
import logImage from "./log.png"


const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();

  if (sessionUser) return <Redirect to="/feed" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      history.push("/feed")
    }
  };

  return (
    <div className="login-container">
      <img
        src={ logImage }
        className="login-image"
        alt="its a log"
      />
      <div className="login-box">
        <h1 className="login-title"> Log On </h1>
        <form 
          onSubmit={handleSubmit}
          className="login-form"  
        >
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
              ))}
          </ul>
          <label className="login-form-label" name="email">
            Email:
          </label >
          <input
              type="text"
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
              placeholder="email"
          />
          <label className="login-form-label" name="password">
            Password:
          </label>
          <input
              type="password"
              value={password}
              label="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
              placeholder="••••••••"
          />
          <Button 
            variant="outlined"
            size="large"
            type="submit"
            sx={{
                color: "whitesmoke",
                border: 3,
                borderColor: "whitesmoke",
                borderRadius: 2,
                margin: 2,
                bgcolor: "darkgreen",
                '&:hover': {
                    bgcolor: "orange",
                }
            }}
        >
          Log On
        </ Button>

        </form>
        <p className="login-note-text">
          Not a member?  Head over to
          <Link 
            className="login-link"
            to="/signup"
          >
            Sign Up
          </Link>  
        </p>
        
      </div>
      <img 
        src={ logImage }
        className="login-image"
        alt="its a log"
      />
      
    </div>
  );
}

export default LoginFormPage;
