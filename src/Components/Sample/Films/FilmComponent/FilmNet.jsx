import FilmInstance from "../FilmInstance/FilmInstance";
import React from "react";
import { FilmNetInfo } from "../../FilmData";

export default function FilmNet() {
  return <FilmInstance filmInfo={FilmNetInfo} />;
}
