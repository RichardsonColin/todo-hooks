import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

function TodoItem(props) {
  return (
    <>
      <ListItem>
        <ListItemText>{props.task}</ListItemText>
      </ListItem>
      <Divider />
    </>
  );
}

export default TodoItem;