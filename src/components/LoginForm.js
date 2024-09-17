import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../api/LoginApi.js";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      toast.warn("Please provide all details !");
      return;
    }
    const res = await login(email, password);
    if (res) {
      toast.success("Logged in successfully!");
      navigate("/home");
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form-group">
        <label htmlFor="email" className="login-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          autoComplete="off"
          className="login-input-email"
        />
      </div>
      <div className="login-form-group">
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
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
  );
}
