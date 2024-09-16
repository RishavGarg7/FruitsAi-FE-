import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { AboutImg } from "../assets";
import { deleteFaq, editFaq } from "../api/FaqApi.js";
import { toast } from "react-toastify";

export default function FaqBox({ data, update, setUpdate }) {
  const handleEdit = async () => {};
  const handleDelete = async () => {
    const res = await deleteFaq(data._id);
    toast.success(res.message);
    setUpdate(!update);
  };
  return (
    <div className="faq-show-inner-box">
      <div className="faq-show-left-box">
        <img src={AboutImg} className="faq-box-img" alt="BoxImage" />
        <h3>{data.name}</h3>
        <div className="faq-show-in-left">
          <MdEdit className="faq-icon-edit faq-icon" onClick={handleEdit} />
          <MdDelete
            className="faq-icon-delete faq-icon"
            onClick={handleDelete}
          />
        </div>
      </div>
      <div className="faq-show-right-box">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
}
