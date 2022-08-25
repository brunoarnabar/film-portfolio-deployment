import React from 'react'
import "./service.scss";

export default function ServiceEntry({icon, sub, txt1, txt2, txt3}) {
  return (
    <div className="serviceEntry">
          <div className="serviceCardTop"> 
            {icon} 
          </div>
          <div className="serviceCardText">
            <div className="serviceSub">{sub}</div>
            <div className="text">{txt1}</div>
            <div className="text">{txt2}</div>
            <div className="text">{txt3}</div>
        </div>
    </div>
  )
}