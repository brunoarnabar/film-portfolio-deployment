import ReactDom from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Greenless from "./Components/Sample/Films/FilmComponent/Greenless";
import TheBox from "./Components/Sample/Films/FilmComponent/TheBox";
import GoBack from "./Components/Sample/Films/FilmInstance/Helpers/GoBack";
// import Nav from "./Components/Nav/Nav"

//goToContext
import { BackToSampleProvider } from "./Contexts/BackToSample";
import { GoToAboutContextProvider } from "./Contexts/GoToAboutContext";
import { GoToContactContextProvider } from "./Contexts/GoToContactContext";
import { AboutClickerProvider } from "./Contexts/AboutClickerContext";
import { ContactClickerProvider } from "./Contexts/ContactClickerContext";

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.Profiler id="MyComponent" onRender={onRenderCallback}>
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
  </React.Profiler>
);
