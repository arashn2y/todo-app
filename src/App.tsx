import { useState } from "react";
import CreateTodoSection from "./components/sections/CreateTodoSection";
import Header from "./components/sections/Header";
import TodoList from "./components/sections/TodoList";
import Todo from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  return (
    <div className="grid grid-rows-12 h-screen">
      <Header title="Dashboard" />
      <h1 className="text-4xl text-center mt-3">Simple Todo List</h1>
      <main className="row-span-10 flex justify-between items-start w-4/6 mx-auto relative">
        <CreateTodoSection onAddNewTodo={newTodo => {
          setTodos([... todos, newTodo])
        }} />
        <TodoList onStatusChange={(creationDate, status) => {
          console.log(creationDate);
          console.log(status);

          // Create a clone of the array to edit
          let todosClone = [...todos];
          for (const todo of todosClone) {
            if(todo.creationDate === creationDate) {
              console.log("Update statusx");
              // This is the right element to edit
              todo.done = status;
            }
          }

          setTodos(todosClone);
        }} todoArray={todos} />
      </main>
    </div>
  );
}

export default App;
