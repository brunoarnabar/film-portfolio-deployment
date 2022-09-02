import { React, useState } from "react";
import "./preview.scss";
import { Link } from "react-router-dom";


export default function Preview(props) {
  // function clickHandle() {
  //   console.log(props.title);
  // }
  const img = props.img;
  const gif = props.gif;
  const string = props.title;

  const [over, setOver] = useState(false);

  let className =
    "PreviewContent fs-body text-accent-400 ff-body fw-bold text-shadow-accent-900";
  if (over) {
    className += " PreviewIsHovered";
  }

  return (
    <Link to={string}>
      <div
        className="PreviewContainer"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        // onClick={clickHandle}
      >
        <div className={className}>
          <div className="PreviewBanner" />
          <img
            className="PreviewBgImg"
            src={over ? gif : img}
            alt={props.title}
          />
          <div className="PreviewTitle">{props.title}</div>
          <div className="PreviewDate">{props.date}</div>
        </div>
      </div>
    </Link>
  );
}
