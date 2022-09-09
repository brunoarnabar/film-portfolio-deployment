import FilmInstance from "../FilmInstance/FilmInstance";
import React from "react";

export default function TheBox() {
  const TheBoxInfo = {
    key: 2,
    title: "The Box",
    date: "11-25-2019",
    vidUrl: "https://vimeo.com/600214381",
    workType: "University Project",
    info: "A man finds a box, taking him out from his mundane existence. Animated by hand and through lazer cutouts. Directed the collaboration with peers in a Studio Animation course at the University Of Pittsburgh",
    skinny: false,
  };

  return <FilmInstance filmInfo={TheBoxInfo} />;
}