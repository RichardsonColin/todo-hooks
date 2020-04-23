import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import './TodoApp.css';

function TodoApp() {
  // initial todos for building purpose
  const testTodos = [
    { id: 1, task: "Prepare lunches", completed: false },
    { id: 2, task: "Clean eavestrough...ugh", completed: true },
    { id: 3, task: "Walk gerbil", completed: false }
  ];

  const [todos, setTodos] = useState(testTodos);

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
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
