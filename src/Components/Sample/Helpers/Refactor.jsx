import { React, useState } from "react";
import "./refactor.scss";
import { Link } from "react-router-dom";

export default function Refactor(props) {
  function clickHandle() {
    console.log(props.title);
  }
  const img = props.img;
  const gif = props.gif;
  const string = props.title;

  const [over, setOver] = useState(false);

  let className = "vid";
  if (over) {
    className += " isHovered";
  }

  const myData = {
    name: "Some thing",
    price: 123
  };

  // const [data, setData] = useState({
  //   key: 1,
  //   title: props.title,
  //   date: props.date,
  //   gif: gif,
  //   img: img
  // });

  // const newTo = {
  //   key: 1,
  //   title: props.title,
  //   date: props.date,
  //   gif: gif,
  //   img: img
  // };

  return (
    <Link to={string} state={myData}>
      <div
        className="vidContainer"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onClick={clickHandle}
      >
        <div className={className}>
          <div className="banner" />
          <img className="img" src={over ? gif : img} alt="nr" />
          <div className="title">{props.title}</div>
          <div className="day">{props.date}</div>
        </div>
      </div>
    </Link>
  );
}
