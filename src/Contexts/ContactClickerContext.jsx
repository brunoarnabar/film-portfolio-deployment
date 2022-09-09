import { createContext, useContext, useState } from "react";

const ContactClickerContext = createContext();

export function useContactClickerContext() {
  return useContext(ContactClickerContext);
}

export function ContactClickerProvider({ children }) {
  const [contactClicked, setContactClicked] = useState(false);

  console.log("contact clicked: " + contactClicked);

  return (
    <ContactClickerContext.Provider value={{contactClicked, setContactClicked}}>
      {children}
    </ContactClickerContext.Provider>
  );
}
