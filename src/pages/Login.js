import React, { useEffect, useState } from "react";
import "../css/Login.css";
import { Google, Facebook, Linkedin, Instagram } from "../assets";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleGuest = () => {
    navigate("/home");
    toast.success("Logged in as Guest User!");
  };
  useEffect(() => {
    toast.info("Click on Guest Icon to Log in as Guest User");
  }, []);
  return (
    <div className="login-outer-container">
      <div className="login-container">
        <h1 className="login-heading">{isLogin ? "Login" : "Register"}</h1>
        <p className="login-terms">
          By {isLogin ? "signing in" : "registering"} you are agreeing our{" "}
          <span className="login-privacy">Term and privacy policy</span>
        </p>
        <div className="login-select">
          <span
            className={`in-login-select ${
              isLogin ? "in-login-select-border" : ""
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
          <span
            className={`in-login-select ${
              !isLogin ? "in-login-select-border" : ""
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </span>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
        <p className="login-options">or connect with</p>
        <div className="login-social-media">
          <img src={Google} alt="Google" loading="lazy" />
          <img src={Facebook} alt="Facebook" loading="lazy" />
          <img src={Linkedin} alt="LinkedIn" loading="lazy" />
          <img src={Instagram} alt="Instagram" loading="lazy" />
          {/* <img src={Instagram} alt="Instagram" loading="lazy" /> */}
          <FaUserCircle
            className="login-guest-icon"
            title="Guest User"
            onClick={handleGuest}
          />
        </div>
      </div>
    </div>
  );
}
