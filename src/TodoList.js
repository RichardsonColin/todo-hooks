import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} task={todo.task} completed={todo.completed} />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;