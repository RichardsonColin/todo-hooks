import { useState, useEffect } from "react";

// general purpose localStorage state management (w/ useEffect)
function useLocalStorageState(key, defaultVal) {

  // create state based off value in localStorage OR default value
  const [state, setState] = useState(() => {
    let initialVal;
    try {
      initialVal = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      initialVal = defaultVal;
    }
    return initialVal;
  });

  // leverage useEffect and update localStorage on change of state
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorageState;