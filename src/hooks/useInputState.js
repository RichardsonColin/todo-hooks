import { useState } from "react";

// handles(change, clear) input values
export default initialVal => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (evt) => {
    setValue(evt.target.value);
  }

  const clear = () => {
    setValue("");
  }

  return [value, handleChange, clear];
}