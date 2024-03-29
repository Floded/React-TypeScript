import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodos = () => {
  const { todoState, toogleTodo } = useContext(TodoContext);
  const { todos } = todoState;

  return {
    todos: todos,
    pendingTodo: todos.filter((todo) => !todo.completed),
    toogleTodo,
  };
};
