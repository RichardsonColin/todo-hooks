import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './TodoApp.css';

function TodoApp() {
  // initial todos for building purpose
  const testTodos = [
    { id: uuidv4(), task: "Prepare lunches", completed: false },
    { id: uuidv4(), task: "Clean eavestrough...ugh", completed: true },
    { id: uuidv4(), task: "Walk gerbil", completed: false }
  ];

  const [todos, setTodos] = useState(testTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  }

  return (
    // Layout taken from material.ui docs example
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>TODOS (WITH HOOKS)</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
