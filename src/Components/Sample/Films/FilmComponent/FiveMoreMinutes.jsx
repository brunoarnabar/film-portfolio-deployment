import FilmInstance from "../FilmInstance/FilmInstance";
import React from "react";
import { FiveMoreMinutesInfo } from "../../FilmData";

export default function FiveMoreMinutes() {
  return <FilmInstance filmInfo={FiveMoreMinutesInfo} />;
}
