import Todo from "../../types/todo";
import Select from "../custom/Select";
import TodoItem from "../custom/TodoItem";
import Label from "../custom/Label";

interface TodoListProps {
  className?: string;
  todoArray: Todo[];
}

const TodoList = (props: TodoListProps) => {
  const { className, todoArray } = props;

  return (
    <div className={"h-full text-center w-96 " + className}>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Order by" />
        <Select name="order-select" onSelectedOptionChange={() => {}} selectedOption="" id="order-select" className="w-full" options={["Expire date", "Priority"]} />
      </div>
      <div className="w-full h-[60%] overflow-y-auto p-5 mt-8 flex flex-col space-y-7">
        {todoArray.map(todo => {
          return <TodoItem key={todo.creationDate.toISOString()} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
