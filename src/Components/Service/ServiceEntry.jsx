import React from "react";
import "./service.scss";

export default function ServiceEntry({ icon, sub, txt1, txt2, txt3 }) {
  return (
    <div className="ServiceEntry box-shadow-dark text-neutral-400">
      {icon}
      <div className="ServiceCardText">
        <div className="title text-neutral-200">{sub}</div>
        <div className="textBody text-neutral-200">{txt1}</div>
      </div>
    </div>
  );
}
