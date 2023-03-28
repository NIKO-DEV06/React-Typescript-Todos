import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContexProvider from "./contex/todos-contex";

function App() {
  return (
    <TodosContexProvider>
      <h1 style={{ textAlign: "center" }}>React + Tyepscript Todos</h1>
      <NewTodo />
      <Todos />
    </TodosContexProvider>
  );
}

export default App;
