import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoFormNew from "./TodoFormNew";
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

  const updateTodo = (todoId, updatedTask) => {
    const updatedTodos = todos.map(todo => (
      todo.id === todoId ? {...todo, task: updatedTask} : todo
    ));
    setTodos(updatedTodos);
  }

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => (
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    ));
    setTodos(updatedTodos);
  }

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
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
