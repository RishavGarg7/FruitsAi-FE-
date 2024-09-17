import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../api/LoginApi.js";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPsw, setCnfPsw] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === "" || password === "" || cnfPsw === "") {
      toast.warn("Please provide all details !");
      return;
    }
    if (password !== cnfPsw) {
      toast.warn("Password not matched !");
      return;
    }
    if (!agree) {
      toast.warn("Please agree to T&C !");
      return;
    }
    const res = await register(email, password);
    if (res) {
      toast.success("Registered successfully!");
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
      <div className="login-form-group">
        <label htmlFor="cnfpsw" className="login-label">
          Confirm Password
        </label>
        <input
          type="password"
          id="cnfpsw"
          value={cnfPsw}
          onChange={(event) => {
            setCnfPsw(event.target.value);
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
            value={agree}
            onChange={() => setAgree(!agree)}
          />
          <label htmlFor="remember-me" className="login-label login-rempsw">
            Agree to Terms and Conditions
          </label>
        </div>
      </div>
      <button type="submit" className="login-button-submit">
        Register
      </button>
    </form>
  );
}
