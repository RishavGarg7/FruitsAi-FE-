import React from "react";

export default function CharReceiveBox({ text }) {
  return (
    <div className="chat-receive-outer-box">
      <div className="chat-receive-msg">{text}</div>
    </div>
  );
}
