import React, { useContext } from "react";
import { TodosContext } from "./contexts/todos.context";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useContext(TodosContext);
  if(todos.length)
  return (
    <Paper>
      <List>
        {todos.map((todo, ind) => (
          <React.Fragment key={ind}>
            <TodoItem
              {...todo}
              key={todo.id}

            />
            {ind < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
  return null;
}

export default TodoList;