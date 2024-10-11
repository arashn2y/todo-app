import Input from "../custom/Input";
import Label from "../custom/Label";
import Select from "../custom/Select";
import Priority from "../../types/priorityEnum";
import DatePicker from "../custom/DatePicker";
import Button from "../custom/Button";
import { FormEvent } from "react";

interface Props {
    onCreateTodo: (event: FormEvent<HTMLFormElement>) => any;
}

const CreateTodoSection = (props: Props) => {
    return (
        <div className="h-[40%] flex flex-col gap-3 justify-center items-center">
            <form onSubmit={props.onCreateTodo}>
                <div className="flex flex-col gap-2 items-start w-96 justify-between">
                    <Label title="Todo" />
                    <Input placeholder="Insert your todo" className="w-full" />
                </div>
                <div className="flex flex-col gap-2 items-start w-96 justify-between">
                    <Label title="Priority" />
                    <Select name="Priority" id="priority" className="w-full" options={[Priority.HIGH, Priority.MEDIUM, Priority.LOW]} />
                </div>
                <div className="flex flex-col gap-2 items-start w-96 justify-between">
                    <Label title="Data" />
                    <DatePicker className="w-full" />
                </div>
                <Button title="Add Todo" className="w-96" />
            </form>
        </div>
    )
}

export default CreateTodoSection;