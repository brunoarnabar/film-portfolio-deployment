// import { useEffect, useState, useRef } from "react";
import { useState } from "react";

// export default function usePersistedState(name, defaultValue) {
//   const [value, setValue] = useState(defaultValue);
//   const nameRef = useRef(name);

//   useEffect(() => {
//     try {
//       const storedValue = localStorage.getItem(name);
//       if (storedValue !== null) setValue(storedValue);
//       else localStorage.setItem(name, defaultValue);
//     } catch {
//       setValue(defaultValue);
//     }
//   }, []);

//   useEffect(() => {
//     try {
//       localStorage.setItem(nameRef.current, value);
//     } catch {}
//   }, [value]);

//   useEffect(() => {
//     const lastName = nameRef.current;
//     if (name !== lastName) {
//       try {
//         localStorage.setItem(name, value);
//         nameRef.current = name;
//         localStorage.removeItem(lastName);
//       } catch {}
//     }
//   }, [name]);

//   return [value, setValue];
// }

export default function usePersistedState(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}