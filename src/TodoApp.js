import React, { useEffect } from "react";
import useTodoState from "./hooks/useTodoState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoFormNew from "./TodoFormNew";
import TodoList from "./TodoList";
import './TodoApp.css';

function TodoApp() {
  // initial todos if localStorage existence
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  // core TodoApp state management
  const {todos, addTodo, updateTodo, removeTodo, toggleTodo} = useTodoState(storedTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoFormNew addTodo={addTodo} />
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
