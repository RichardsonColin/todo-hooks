import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext();
export const DispatchContext = createContext();

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), task: action.task, completed: action.completed }];
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
  const [todos, dispatch] = useLocalStorageReducer("todos", [], todosReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}