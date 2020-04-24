import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import TodoItem from "./TodoItem";

function TodoList({ todos, updateTodo, toggleTodo, removeTodo }) {
  if(todos.length)
  return (
    <Paper>
      <List>
        {todos.map((todo, ind) => (
          <>
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
            {ind < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
  return null;
}

export default TodoList;