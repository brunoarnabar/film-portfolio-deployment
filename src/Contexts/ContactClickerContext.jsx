import { createContext, useContext, useState } from "react";

const ContactClickerContext = createContext();

export function useContactClickerContext() {
  return useContext(ContactClickerContext);
}

export function ContactClickerProvider({ children }) {
  const [contactClicked, setContactClicked] = useState(false);
  return (
    <ContactClickerContext.Provider value={{contactClicked, setContactClicked}}>
      {children}
    </ContactClickerContext.Provider>
  );
}
