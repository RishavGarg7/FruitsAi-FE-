import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import { InAbout } from "../assets";

export default function About() {
  return (
    <div className="about-outer-container">
      <img src={InAbout} className="about-img" alt="About Us"/>
      <div className="about-container">
        <h2 className="about-title">Fruit.Ai</h2>
        <p className="about-paragraph">
          Whether you're looking to discover new fruits, understand their
          nutritional values, or find the perfect fruit for your diet, our
          AI-driven chatbot is here to assist. We provide personalized fruit
          recommendations tailored to your health needs, making it easier for
          you to integrate the best fruits into your daily routine.
        </p>
        <Link to={"/home"} className="about-btn">CLOSE</Link>
      </div>
    </div>
  );
}
