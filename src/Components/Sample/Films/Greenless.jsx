import FilmInstance from "./FilmInstance/FilmInstance"
import React from "react";


export default function Greenless() {
  const GreenlessInfo = {
    key: 1,
    title: "Greenless",
    date: "05-22-2000",
    vidUrl: "https://vimeo.com/600214381",
    workType: "Personal",
    info: "Unfinished",
  };

  return <FilmInstance filmInfo={GreenlessInfo} />;
}
