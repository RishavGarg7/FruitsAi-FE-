import React, { useState } from "react";
import "../css/Login.css";
import { Google, Facebook, Linkedin, Instagram } from "../assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please provide all details !");
      return;
    }
    navigate("/home");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-outer-container">
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
        <p className="login-terms">
          By signing in you are agreeing our{" "}
          <span className="login-privacy">Term and privacy policy</span>
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="email" className="login-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="login-input-email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="login-input-psw"
            />
          </div>
          <div className="login-checkbox-group">
            <div className="login-in-checkbox">
              <input
                type="checkbox"
                id="remember-me"
                className="login-input-checkbox"
              />
              <label htmlFor="remember-me" className="login-label login-rempsw">
                Remember password
              </label>
            </div>
            <span href="#" className="login-forgotpsw">
              Forget password
            </span>
          </div>
          <button type="submit" className="login-button-submit">
            Login
          </button>
        </form>
        <p className="login-options">or connect with</p>
        <div className="login-social-media">
          <img src={Google} alt="Google" loading="lazy" />
          <img src={Facebook} alt="Facebook" loading="lazy" />
          <img src={Linkedin} alt="LinkedIn" loading="lazy" />
          <img src={Instagram} alt="Instagram" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
