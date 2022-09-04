import React, { useContext, useState, createContext, useEffect } from "react";
import LoaderDots from "../Components/Loader/LoaderDots";

// const BackToSample = createContext();
// const sampleTrueContext = createContext();
// const sampleFalseContext = createContext();

const SendToSampleContext = createContext();

// export function useBackToSample() {
//   return useContext(BackToSample);
// }

// export function useSampleTrueContext() {
//   return useContext(sampleTrueContext);
// }

// export function useSampleFalseContext() {
//   return useContext(sampleFalseContext);
// }

export function useSendToSampleContext() {
  return useContext(SendToSampleContext);
}

export function BackToSampleProvider({ children }) {
  //   const [atSample, setAtSample] = useState(false);
  const [sendToSample, setSendToSample] = useState(false);

  const [loading, isLoading] = useState(false);
  const load = loading ? <LoaderDots /> : null;

//   useEffect(() => {
//     if (sendToSample) {
//       isLoading(true);
//       console.log("Go Back!!! sendToSample:" + sendToSample);
//       window.location.replace("/#sample");

//     //   setTimeout(() => {
//         // if (!sampleIsVisble) {
//             //scroll to Sample
//     //     }
//     //   }, 300);
//     } else {
//       setTimeout(() => {
//         isLoading(false);
//       }, 500);
//     }
//     console.log(sendToSample);
//   }, [sendToSample]);

  //   function setSampleTrue() {
  //     setAtSample(true);
  //     // setTimeout(() => {
  //     //   isLoading(true);
  //     // }, 9500);
  //     console.log("done")
  //     setTimeout(() => {
  //       isLoading(false);
  //     }, 1500);
  //   }

  //   function setSampleFalse() {
  //     isLoading(true);
  //     setAtSample(false);
  //      setTimeout(() => {
  //        window.location.replace("/#sample");
  //      }, 300);
  //   }

  return (
    <SendToSampleContext.Provider value={{ sendToSample, setSendToSample }}>
      {/* <BackToSample.Provider value={atSample}>
        <sampleTrueContext.Provider value={setSampleTrue}>
          <sampleFalseContext.Provider value={setSampleFalse}> */}
      {load}
      {children}
      {/* </sampleFalseContext.Provider>
        </sampleTrueContext.Provider>
      </BackToSample.Provider> */}
    </SendToSampleContext.Provider>
  );
}
