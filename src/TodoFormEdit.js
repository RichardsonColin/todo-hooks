import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";

function TodoFormEdit({id, task, toggleEdit}) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clear] = useInputState(task);

  const handleEdit = (evt, id) => {
    evt.preventDefault();
    dispatch({ type: "UPDATE", id: id, newTask: value });
    clear();
    toggleEdit();
  }
  return (
    <React.Fragment>
      <form
        onSubmit={(evt) => handleEdit(evt, id)}
        style={{ marginLeft: "1rem", width: "100%" }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Edit Todo'
          fullWidth
          autoFocus
        />
      </form>
      <ListItemSecondaryAction>
        <IconButton aria-label="Update" onClick={(evt) => handleEdit(evt, id)}>
          <SaveIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </React.Fragment>
  );
}

export default TodoFormEdit;