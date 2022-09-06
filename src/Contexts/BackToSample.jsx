import React, { useContext, useState, createContext } from "react";
import LoaderDots from "../Components/Loader/LoaderDots";

const BackToSample = createContext();
const sampleTrueContext = createContext();
const sampleFalseContext = createContext();

export function useBackToSample() {
  return useContext(BackToSample);
}

export function useSampleTrueContext() {
  return useContext(sampleTrueContext);
}

export function useSampleFalseContext() {
  return useContext(sampleFalseContext);
}

export function BackToSampleProvider({ children }) {
  const [atSample, setAtSample] = useState(false);
  const [loading, isLoading] = useState(false);
  const load = loading ? <LoaderDots/> : null;

  function setSampleTrue() {
    setAtSample(true);
    // setTimeout(() => {
    //   isLoading(true);
    // }, 9500);
    // console.log("done")
    setTimeout(() => {
      isLoading(false);
    }, 1500);
  }

  function setSampleFalse() {
    isLoading(true);
    setAtSample(false);
     setTimeout(() => {
       window.location.replace("/#sample");
     }, 300);
  }


  return (
    <BackToSample.Provider value={atSample}>
      <sampleTrueContext.Provider value={setSampleTrue}>
        <sampleFalseContext.Provider value={setSampleFalse}>
          {load}
          {children}
        </sampleFalseContext.Provider>
      </sampleTrueContext.Provider>
    </BackToSample.Provider>
  );
}
