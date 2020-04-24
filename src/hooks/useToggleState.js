import { useState } from "react";

// universal state toggler
function useToggle(initialVal = false) {

  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  }

  // return state and function to toggle it
  return [state, toggle];

}

export default useToggle;