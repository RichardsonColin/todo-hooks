import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemText from "@material-ui/core/ListItemText";

function TodoItem({ task, completed }) {
  return (
    <ListItem>
      <ListItemText>{task}</ListItemText>
    </ListItem>
  );
}

export default TodoItem;