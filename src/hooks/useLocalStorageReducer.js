import { useReducer, useEffect } from "react";

// general purpose localStorage state management (w/ useEffect)
function useLocalStorageReducer(key, defaultVal, reducer) {

  // create state based off value in localStorage OR default value
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
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

  return [state, dispatch];
}

export default useLocalStorageReducer;