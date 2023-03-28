import { FC, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../contex/todos-contex";
import classes from "./Todos.module.css";

const Todos: FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
