import FilmInstance from "../FilmInstance/FilmInstance";
import React from "react";
import { ThisPortfolioInfo } from "../../FilmData";

export default function ThisPortfolio() {
  return <FilmInstance filmInfo={ThisPortfolioInfo} />;
}