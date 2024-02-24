import { TodoProvider } from "./context/TodoProvider";
import { TodoList } from './TodoList';

export const Todo = () => {
  return (
    <TodoProvider>
        <h3>Todo:</h3>
           <TodoList/>
    </TodoProvider>
  )
}
