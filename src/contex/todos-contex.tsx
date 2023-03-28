import React, { FC, useState } from "react";
import Todo from "../models/todo";

interface TodosContextObj {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}
type Props = {
  children: React.ReactNode;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContexProvider: FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = [{ id: Math.random().toString(36), text: todoText }];
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contexValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };
  return (
    <TodosContext.Provider value={contexValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContexProvider;
