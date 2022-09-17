import ReactDom from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Greenless from "./Components/Sample/Films/FilmComponent/Greenless";
import TheBox from "./Components/Sample/Films/FilmComponent/TheBox";
import BirdsEyeView from "./Components/Sample/Films/FilmComponent/BirdsEyeView";
import Phenomena from "./Components/Sample/Films/FilmComponent/Phenomena";
import FilmNet from "./Components/Sample/Films/FilmComponent/FilmNet";
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
                <Route path="/BirdsEyeView" element={<BirdsEyeView />} />
                <Route path="/Phenomena" element={<Phenomena />} />
                <Route path="/FilmNet" element={<FilmNet />} />
                <Route
                  path="*"
                  element={
                    <div
                      style={{
                        backgroundColor: "var(--clr-primary-900)",
                        height: "100vh",
                      }}
                    >
                      <p>
                        There's nothing here :/ New sections are coming though!
                        :) Check out what I've currently got at brunoarnabar.com
                      </p>
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
