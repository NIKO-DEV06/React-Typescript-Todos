import { useRef, useContext } from "react";
import { FC } from "react";
import { TodosContext } from "../contex/todos-contex";
import classes from "./NewTodo.module.css";

const NewTodo: FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextinput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextinput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);

    // Clear the input field
    todoTextinput.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextinput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
