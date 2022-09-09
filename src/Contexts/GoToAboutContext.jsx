import React, { useContext, useState, createContext, useEffect } from "react";
import LoaderDots from "../Components/Loader/LoaderDots";
import { useAboutClickerContext } from "./AboutClickerContext";

const GoToAboutContext = createContext();

export function useGoToAboutContext() {
  return useContext(GoToAboutContext);
}

export function GoToAboutContextProvider({ children }) {
  const { aboutClicked, setAboutClicked } = useAboutClickerContext();

  const [loading, isLoading] = useState(false);
  const load = loading ? <LoaderDots /> : null;

  const [atAbout, setAtAbout] = useState(false);

  useEffect(() => {
    if (aboutClicked) {
      if (atAbout) {
        setAboutClicked(false);
        setTimeout(() => {
          isLoading(false);
        }, 1500);
      } else {
        isLoading(true);
        setTimeout(() => {
          window.location.replace("/#about");
        }, 300);
      }
    }
  }, [atAbout, isLoading, aboutClicked, setAboutClicked]);

  return (
    <GoToAboutContext.Provider value={{ atAbout, setAtAbout }}>
        {load}
        {children}
    </GoToAboutContext.Provider>
  );
}