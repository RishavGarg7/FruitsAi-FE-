import React, { useEffect, useState } from "react";
import "../css/Translate.css";
import { getLang, translate } from "../api/TranslateApi";
import { toast } from "react-toastify";

export default function Translate() {
  const [lang, setLang] = useState([]);
  const [langSel, setLangSel] = useState("en");
  const [textVal, setTextVal] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const res = await getLang();
      setLang(res);
    };
    fetch();
  }, []);

  const handleTranslate = async (e) => {
    e.preventDefault();
    if (textVal === "") {
      toast.error("Please write something !");
      return;
    }
    console.log("Translate to: ", langSel);
    console.log("Text to Translate: ", textVal);
    setResult("Loading . . .");
    setTextVal("");
    const res = await translate(textVal, langSel);
    setResult(res);
  };
  return (
    <div className="translate-outer-container">
      <div className="translate-container">
        <h1 className="translate-heading">Translator</h1>
        <p className="translate-tagline">Translate. Communicate. Connect.</p>
        <form className="tranlate-main-box" onSubmit={handleTranslate}>
          <div className="translate-form">
            <textarea
              rows={10}
              placeholder="Enter Text to Translate Here . . ."
              value={textVal}
              onChange={(e) => {
                setTextVal(e.target.value);
              }}
              className="translate-textarea"
            />
            <select
              value={langSel}
              onChange={(e) => {
                setLangSel(e.target.value);
                console.log(e.target.value);
              }}
              className="translate-select"
            >
              {lang?.map((item, index) => (
                <option value={item.language} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="translate-form">
            <button type="submit" className="translate-add-btn">
              Tranlate
            </button>
            <textarea
              rows={10}
              placeholder="Output is shown here . . ."
              value={result}
              className="translate-textarea"
              disabled
            />
          </div>
        </form>
      </div>
    </div>
  );
}
