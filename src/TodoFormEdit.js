import React from "react";
import useInputState from "./hooks/useInputState";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";

function TodoFormEdit({todo, updateTodo, toggleEdit}) {
  const [value, handleChange, clear] = useInputState(todo.task);

  const handleEdit = (evt, id) => {
    evt.preventDefault();
    updateTodo(id, value);
    clear();
    toggleEdit();
  }
  return (
    <>
      <form onSubmit={(evt) => handleEdit(evt, todo.id)} style={{ width: "100%" }}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Edit Todo'
          fullWidth
        />
      </form>
      <ListItemSecondaryAction>
        <IconButton aria-label="Update" onClick={(evt) => handleEdit(evt, todo.id)}>
          <SaveIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
}

export default TodoFormEdit;