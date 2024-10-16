import Input from "../custom/Input";
import Label from "../custom/Label";
import Select from "../custom/Select";
import { Priority } from "../../types/priorityEnum";
import DatePicker from "../custom/DatePicker";
import Button from "../custom/Button";
import Todo from "../../types/todo";
import { v4 as uuid } from "uuid";

interface Props {
  // Function to call when a new todo is
  onAddNewTodo: (newTodo: Todo) => void;
  todo: Todo;
  setTodo: React.Dispatch<React.SetStateAction<Todo>>;
}

const CreateTodoSection = (props: Props) => {
  const { todo, setTodo } = props;

  const onCreateTodoClick = () => {
    // Call the parent function to add the new todo to the state
    props.onAddNewTodo({
      ...todo,
      id: uuid()
    });
    setTodo({
      id: "",
      title: "",
      expireDate: new Date(),
      priority: Priority.HIGH,
      done: false
    });
  };

  return (
    <div className="h-full flex flex-col gap-3 justify-start items-center">
      <div className="flex flex-col gap-2 items-start w-72 lg:w-96 justify-between">
        <Label title="Todo" />
        <Input
          placeholder="Insert your todo"
          className="w-full"
          value={todo.title}
          setValue={value => {
            setTodo(prevState => {
              return {
                ...prevState,
                title: value
              };
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2 items-start w-72 lg:w-96 justify-between">
        <Label title="Priority" />
        <Select
          selectedOption={todo.priority as string}
          onSelectedOptionChange={value => {
            setTodo(prevState => {
              return {
                ...prevState,
                priority: value as Priority
              };
            });
          }}
          name="Priority"
          id="priority"
          className="w-full"
          options={[Priority.HIGH, Priority.MEDIUM, Priority.LOW]}
        />
      </div>
      <div className="flex flex-col gap-2 items-start w-72 lg:w-96 justify-between">
        <Label title="Data" />
        <DatePicker
          className="w-full"
          value={todo.expireDate}
          setValue={value => {
            setTodo(prevState => {
              return {
                ...prevState,
                expireDate: value
              };
            });
          }}
        />
      </div>
      <Button disabled={todo.title.trim().length >= 4 ? false : true} title="Add todo" className="w-72 lg:w-96 mt-5" onClick={onCreateTodoClick} />
    </div>
  );
};

export default CreateTodoSection;
