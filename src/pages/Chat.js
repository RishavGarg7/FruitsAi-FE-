import React, { useEffect, useState } from "react";
import "../css/Chat.css";
import CharSentBox from "../components/ChatSentBox.js";
import CharReceiveBox from "../components/CharReceiveBox";
import { toast } from "react-toastify";
import { getreply } from "../api/ChatBotApi.js";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [chatArr, setChararr] = useState(["Try with a fruit name like Apple"]);
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("chats"));
    console.log(res);
    if (res) {
      setChararr(res);
    }
  }, []);
  const handleMessage = (e) => {
    e.preventDefault();
    if (msg === "") {
      toast.error("Please write Something!!");
      return;
    }
    const res = getreply(msg);
    setChararr([...chatArr, msg, res]);
    localStorage.setItem("chats", JSON.stringify(chatArr));
    setMsg("");
  };
  return (
    <div className="chat-outer-container">
      <div className="chat-container">
        <h1 className="chat-heading">ChatBot</h1>
        <p className="chat-tagline">
          To begin chatting, simply type the name of a fruit into the input box.
        </p>
        <div className="chat-middle-part">
          {/* <CharSentBox text="Try with a fruit name like Apple" /> */}
          {chatArr?.map((value, index) =>
            index % 2 === 1 ? (
              <CharSentBox key={index} text={value} />
            ) : (
              <CharReceiveBox key={index} text={value} />
            )
          )}
        </div>
        <form className="chat-form" onSubmit={handleMessage}>
          <input
            type="text"
            className="chat-input-box"
            placeholder="Start typing here..."
            autoComplete="off"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="chat-send-btn">SEND</button>
        </form>
      </div>
    </div>
  );
}
