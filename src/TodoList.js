import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import TodoItem from "./TodoItem";

function TodoList({ todos, updateTodo, toggleTodo, removeTodo }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;