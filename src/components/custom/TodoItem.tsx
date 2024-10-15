import { IoTrashBinOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import Todo from "../../types/todo";
import Checkbox from "./Checkbox";
import Badge from "./Badge";
import { useState } from "react";

interface Props {
  // Called when the status of this todo changes
  onStatusChange: (creationDate: Date, status: boolean) => void;
  // Todo data
  todo: Todo;
}

const TodoItem = (props: Props) => {
  const { title, expireDate, priority , creationDate, done} = props.todo;
  // The initial value of this status variable depends on the data of the todo
  const [status, setStatus] = useState<boolean>(done);

  /**
   *  Function called when the checkbox gets updated
   * @param newStatus {boolean} the new status of the checkbox
   * */ 
  const handleCheckboxChange = (newStatus: boolean) => {
    setStatus(!newStatus);
    props.onStatusChange(creationDate, newStatus);
  };

  return (
    <div className="relative shadow flex flex-row p-6 border-2 rounded-xl w-full">
      <Checkbox onCheckboxChange={handleCheckboxChange as any} currentValue={status || done} />
      <div className="ml-3 grow flex flex-col items-start justify-start">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="text-gray-500">{expireDate.toLocaleDateString()}</div>
      </div>
      <div className="flex flex-row">
        <IoTrashBinOutline className="cursor-pointer" color="red" size={20} />
        <FaPencilAlt className="ml-2 cursor-pointer" color="gray" size={20} />
      </div>

      <Badge priority={priority} />
    </div>
  );
};

export default TodoItem;
