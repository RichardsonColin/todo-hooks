import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleChange, clear] = useInputState("");
  const submitForm = evt => {
    evt.preventDefault();
    addTodo(value);
    clear();
  }
  return (
    <Paper>
      <form onSubmit={submitForm}>
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default TodoForm;