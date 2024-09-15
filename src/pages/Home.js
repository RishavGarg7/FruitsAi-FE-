import React from "react";
import { ChatbotImg, AboutImg, FaqImg, TranslateImg } from "../assets";
import "../css/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-outer-container">
      <div className="home-container">
        <h1 className="home-title">Fruit.Ai</h1>
        <p className="home-subtitle">"Be Healthy!"</p>
        <div className="home-buttons-box">
          <Link to={'/chat'} className="home-button home-chat-box">
            <img
              className="home-in-box-image"
              src={ChatbotImg}
              alt="Chatbot"
              loading="lazy"
            />
            <p className="home-img-title">Chat</p>
          </Link>
          <Link to={'/translate'} className="home-button home-translate-box">
            <img
              className="home-in-box-image"
              src={TranslateImg}
              alt="Translate"
              loading="lazy"
            />
            <p className="home-img-title">Translate</p>
          </Link>
          <Link to={'/faq'} className="home-button home-faqs-box">
            <img
              className="home-in-box-image"
              src={FaqImg}
              alt="FAQ's"
              loading="lazy"
            />
            <p className="home-img-title">FAQs</p>
          </Link>
          <Link to={'/about'} className="home-button home-about-box">
            <img
              className="home-in-box-image"
              src={AboutImg}
              alt="About"
              loading="lazy"
            />
            <p className="home-img-title">About</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
