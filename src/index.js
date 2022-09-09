import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Greenless from "./Components/Sample/Films/FilmData/Greenless";
import TheBox from "./Components/Sample/Films/FilmData/TheBox";
import GoBack from "./Components/Sample/Films/FilmInstance/Helpers/GoBack";
// import Nav from "./Components/Nav/Nav"

//goToContext
import { BackToSampleProvider } from "./Contexts/BackToSample";
import { GoToAboutContextProvider } from "./Contexts/GoToAboutContext";
import { GoToContactContextProvider } from "./Contexts/GoToContactContext";
import { AboutClickerProvider } from "./Contexts/AboutClickerContext";
import { ContactClickerProvider } from "./Contexts/ContactClickerContext";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <AboutClickerProvider>
    <ContactClickerProvider>
      <GoToContactContextProvider>
        <GoToAboutContextProvider>
          <BackToSampleProvider>
            <BrowserRouter>
              {/* <Nav/> */}
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Greenless" element={<Greenless />} />
                <Route path="/TheBox" element={<TheBox />} />
                <Route
                  path="*"
                  element={
                    <div style={{ backgroundColor: "white", height: "86vh" }}>
                      <GoBack />
                      <p>There's nothing here!</p>
                    </div>
                  }
                />
              </Routes>
            </BrowserRouter>
          </BackToSampleProvider>
        </GoToAboutContextProvider>
      </GoToContactContextProvider>
    </ContactClickerProvider>
  </AboutClickerProvider>
);
