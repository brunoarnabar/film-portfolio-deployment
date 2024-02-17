import React from "react";
import { useParams } from "react-router-dom";
import FilmData from "../../FilmData";
import FilmInstance from "../FilmInstance/FilmInstance";

const FilmComponent = () => {
  const { filmUrl } = useParams();
  const filmData = FilmData.find((film) => film.url === filmUrl);

  if (!filmData) {
    return <div>Film not found.</div>; // Optional: Handle case where no film matches
  }

  return <FilmInstance filmInfo={filmData} />;
};

export default FilmComponent;
