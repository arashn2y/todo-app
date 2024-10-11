import CreateTodoSection from "./components/sections/CreateTodoSection";
import Header from "./components/sections/Header";
import TodoList  from "./components/sections/TodoList";

function App() {
  return (
    <div className="grid grid-rows-12">
      <Header title="Dashboard" />
      <div className="text-center pt-4">
          <h1 className="text-4xl">Simple Todo List</h1>
        </div>
      <main className="flex flex-col  items-center row-span-8">
        <CreateTodoSection onCreateTodo={(data) => {
          console.log(data)
        }} />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
