import React from "react";
import TodoFormEdit from "./TodoFormEdit";
import useToggleState from "./hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";


function TodoItem({ id, task, completed, updateTodo, removeTodo, toggleTodo }) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: "64px" }}>
      {
        isEditing ?
          <TodoFormEdit
            id={id}
            task={task}
            updateTodo={updateTodo}
            toggleEdit={toggle}
          />
        :
        <>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => toggle(isEditing)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  );
}

export default TodoItem;