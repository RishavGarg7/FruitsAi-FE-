import React, { useEffect, useState } from "react";
import "../css/Faq.css";
import FaqFrom from "../components/FaqFrom";
import FaqBox from "../components/FaqBox";
import { getFaq } from "../api/FaqApi";
import { toast } from "react-toastify";

export default function Faq() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getFaq();
        setData(res);
      } catch (err) {
        console.log(err);
        toast.error(err);
      }
    };
    getData();
  }, [update]);
  return (
    <div className="faq-container">
      <h2 className="faq-heading">FaQ Section</h2>
      <FaqFrom update={update} setUpdate={setUpdate} />
      <div className="faq-show-box">
        {data?.map((item, index) => (
          <FaqBox
            key={index}
            data={item}
            update={update}
            setUpdate={setUpdate}
          />
        ))}
      </div>
    </div>
  );
}
