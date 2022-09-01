import "./card.scss";
import Quality from "./Quality"

import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 40,
  1.1
];
const trans = (x, y, s) =>
  `perspective(1300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card(data) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 8, tension: 150, friction: 30 }
  }));
  return (
    <animated.div
      className="CardBody"
      onMouseMove={({ clientX: x, clientY: y }) => 
      set({ xys: calc(x, y) }) 
      // console.log("x:", x, "y:", y)
    }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans) }}
    >
      {data.qual.map((qual) => (
        <Quality
          compSciIcon={qual.compSciIcon}
          title={qual.title}
          oneOne={qual.oneOne}
          oneTwo={qual.oneTwo}
          oneThree={qual.oneThree}
          twoOne={qual.twoOne}
          twoTwo={qual.twoTwo}
          twoThree={qual.twoThree}
          key={qual.id}
        />
      ))}
    </animated.div>
  );
}