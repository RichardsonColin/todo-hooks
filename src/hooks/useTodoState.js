import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// core Todo state AND state methods
export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
    },
    updateTodo: (todoId, updatedTask) => {
      const updatedTodos = todos.map(todo => (
        todo.id === todoId ? { ...todo, task: updatedTask } : todo
      ));
      setTodos(updatedTodos);
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => (
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ));
      setTodos(updatedTodos);
    }
  };
};
