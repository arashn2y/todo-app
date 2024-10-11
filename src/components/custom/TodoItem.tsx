import Todo from "../../types/todo";
import Priority from "../../types/priorityEnum";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { PriorityPill } from "./PriorityPill";
import DateView from "./DateView";

const TodoItem = (props: Todo) => {
    const { title, expireDate, priority } = props;

    return (
        <div className="shadow flex flex-row p-6 w-[80%] border-2 rounded-xl">
            <div className="w-[20%]">
                <MdCheckBoxOutlineBlank size={25} />
            </div>
            <div className="grow">
                <div>
                    {
                        title
                    }
                </div>
                <DateView date={expireDate} />
            </div>
            <div>
                <div className="flex flex-row">
                    <IoTrashBinOutline color="red" size={22} />
                    <FaPencilAlt className="ml-2" color="gray" size={20} />
                </div>
                <PriorityPill priority={priority} />
            </div>
        </div>
    )
}

export default TodoItem;