import React, { useState } from "react";
import { toast } from "react-toastify";
import { addFaq } from "../api/FaqApi.js";

export default function FaqFrom({ update, setUpdate }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const emptyForm = () => {
    setName("");
    setTitle("");
    setDesc("");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title === "" || desc === "" || name === "") {
      toast.warn("Please fill all fields !");
      return;
    }
    const res = await addFaq(name, title, desc);
    toast.success(res.message);
    emptyForm();
    setUpdate(!update);
  };
  return (
    <div className="faq-input-box">
      <form className="faq-form" onSubmit={handleSubmit}>
        <div className="faq-input-upper-part">
          <div className="faq-input-left-part">
            <div className="faq-input-field">
              <label htmlFor="name" className="faq-labels">
                Fruit Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                className="faq-input"
                placeholder="Enter Fruit Name . . ."
              />
            </div>
            <div className="faq-input-field">
              <label htmlFor="title" className="faq-labels">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="faq-input"
                placeholder="Please Enter Title . . ."
              />
            </div>
          </div>
          <div className="faq-input-right-part">
            <div className="faq-input-field">
              <label htmlFor="desc" className="faq-labels">
                Description
              </label>
              <textarea
                id="desc"
                className="faq-input faq-textarea"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Provide brief description . . ."
              />
            </div>
          </div>
        </div>
        <div className="faq-input-lower-part">
          <button type="submit" className="faq-add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
