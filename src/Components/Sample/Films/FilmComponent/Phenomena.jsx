import FilmInstance from "../FilmInstance/FilmInstance";
import React from "react";
import { PhenomenaInfo } from "../../FilmData";

export default function Phenomena() {
  return <FilmInstance filmInfo={PhenomenaInfo} />;
}
