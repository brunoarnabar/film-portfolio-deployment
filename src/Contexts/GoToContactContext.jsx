import React, { useContext, useState, createContext, useEffect } from "react";
import LoaderDots from "../Components/Loader/LoaderDots";
import { useContactClickerContext } from "./ContactClickerContext";

const GoToContactContext = createContext();


export function useGoToContactContext() {
  return useContext(GoToContactContext);
}

export function GoToContactContextProvider({ children }) {

  const { contactClicked, setContactClicked } = useContactClickerContext();

  const [loading, isLoading] = useState(false);
  const load = loading ? <LoaderDots /> : null;

  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    if (contactClicked) {
      if (atContact) {
        setContactClicked(false);
        setTimeout(() => {
          isLoading(false);
        }, 1500);
      } else {
        isLoading(true);
        setTimeout(() => {
          window.location.replace("/#contact");
        }, 300);
      }
    }
  }, [atContact, isLoading, contactClicked, setContactClicked]);

  return (
        <GoToContactContext.Provider value={{atContact, setAtContact}}>
            {load}
            {children}
        </GoToContactContext.Provider>
  );
}
