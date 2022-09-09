import { createContext, useContext, useState } from "react";

const AboutClickerContext = createContext();

export function useAboutClickerContext() {
    return useContext(AboutClickerContext);
}

export function AboutClickerProvider({children}) {
    const [aboutClicked, setAboutClicked] = useState(false);
    console.log("about clicked: " + aboutClicked);

    return (
      <AboutClickerContext.Provider value={{aboutClicked, setAboutClicked}}>
        {children}
      </AboutClickerContext.Provider>
    );
}