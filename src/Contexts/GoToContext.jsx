import React, { useContext, useState, createContext, useEffect } from "react";
import LoaderDots from "../Components/Loader/LoaderDots";

const GoToContext = createContext();

export function useGoToContext() {
  return useContext(GoToContext);
}

export function GoToContextProvider({ children }) {
  const [loading, isLoading] = useState(false);
  const load = loading ? <LoaderDots /> : null;

  const [atAbout, setAtAbout] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    if (atAbout) {
        console.log("I was set True!")
        setTimeout(() => {
            isLoading(false);
         }, 1500);
    }
    else {
        console.log("I was set False!");
        isLoading(true);
        setTimeout(() => {
            window.location.replace("/#about");
        }, 300);
    }
  }, [atAbout, isLoading]);

  useEffect(() => {
    if (atContact) {
      console.log("I was set True!");
      setTimeout(() => {
        isLoading(false);
      }, 1500);
    } else {
      console.log("I was set False!");
      isLoading(true);
      setTimeout(() => {
        window.location.replace("/#contact");
      }, 300);
    }
  }, [atContact, isLoading]);

//   function setAboutTrue() {
    
//   }

//   function setAboutFalse() {
    
    
//     setAtAbout(false);
    
//   }

  return (
    <GoToContext.Provider value={(atAbout, setAtAbout)}>
      <GoToContext.Provider value={(atContact, setAtContact)}>
        {load}
        {children}
      </GoToContext.Provider>
    </GoToContext.Provider>
  );
}
