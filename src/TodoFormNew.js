import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

function TodoFormNew() {
  const [value, handleChange, clear] = useInputState("");
  const dispatch = useContext(DispatchContext);

  const submitForm = evt => {
    evt.preventDefault();
    if(value.length) {
      dispatch({ type: "ADD", task: value });
      clear();
    }
  }

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={submitForm}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoFormNew;