import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { addFaq } from "../api/FaqApi.js";
import { handleFileUpload } from "../api/FileUpload.js";

export default function FaqFrom({ update, setUpdate }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const inputFile = useRef(null);
  const emptyForm = () => {
    setName("");
    setTitle("");
    setDesc("");
    if (inputFile.current) {
      inputFile.current.value = "";
      inputFile.current.type = "text";
      inputFile.current.type = "file";
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title === "" || desc === "" || name === "" || img === "") {
      toast.warn("Please fill all fields !");
      return;
    }
    const url = await handleFileUpload(img);
    if (!url) {
      toast.error("Error while image uploading");
      return;
    }
    const res = await addFaq(name, title, desc, url);
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
            <div className="faq-input-field">
              <label htmlFor="image" className="faq-labels">
                Image
              </label>
              <input
                type="file"
                ref={inputFile}
                accept="image/png, image/jpeg, image/jpg"
                id="image"
                // value={img}
                onChange={(e) => setImg(e.target.files[0])}
                className="faq-input faq-input-image"
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
                rows={6}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Provide brief description . . ."
              />
            </div>
            <div className="faq-input-field">
              <button type="submit" className="faq-add-btn">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
