import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import { Todo } from "./interfaces/interfaces";

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

  const { toogleTodo } = useContext(TodoContext)

    const handleDBClick = () => {
        // console.log('handleDBClick', todo.description);
        toogleTodo( todo.id );
        
    }

  return (
    <li onDoubleClick={handleDBClick}
    style={{
      cursor: 'pointer',
      textDecoration: todo.completed ? 'line-through' : ''
    }}>
        {todo.description}
    </li>
  )
}
