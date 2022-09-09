import FilmInstance from "../FilmInstance/FilmInstance"
import React from "react";


export default function Greenless() {
  const GreenlessInfo = {
    key: 1,
    title: "Sample Of Greenless",
    date: "06-22-2021",
    vidUrl: "https://vimeo.com/600195237",
    workType: "Personal",
    info: "Shots from a feature film that was never finished due to in-cast complications. The script was feature length, and the experience on set the days we shoot have been invaluable",
  };

  return <FilmInstance filmInfo={GreenlessInfo} />;
}
