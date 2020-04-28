import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext([]);

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), task: action.task, completed: action.completed }]
    case "UPDATE":
      return state.map(todo => (
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      ));
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id)
    case "TOGGLE":
      return state.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ));
    default:
      return state;
  }
};

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer , []);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  )
}