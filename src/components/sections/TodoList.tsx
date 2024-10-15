import Todo from "../../types/todo";
import Select from "../custom/Select";
import TodoItem from "../custom/TodoItem";
import Label from "../custom/Label";
import { useState } from "react";
import { OrderPolicy } from "../../types/orderPolicyEnum";
import { getPriorityNumber } from "../../types/priorityEnum";

interface TodoListProps {
  className?: string;
  todoArray: Todo[];

  onStatusChange: (expireDate: Date, status: boolean) => void;
}

const TodoList = (props: TodoListProps) => {
  const { className, todoArray } = props;
  const [orderPolicy, setOrderPolicy] = useState<OrderPolicy>(OrderPolicy.EXPIRE_DATE);

  function getSortedTodos(policyToOrder: OrderPolicy): Todo[] {
    if (policyToOrder === OrderPolicy.EXPIRE_DATE) {
      // Logic to order by expire date
      return [...todoArray].sort((a: Todo, b: Todo): number => {
        const expireA = a.expireDate;
        const expireB = b.expireDate;

        if(expireA > expireB) return 1;
        else if (expireA < expireB) return -1;
        return 0;
      })
    } else {
      return [...todoArray].sort((a: Todo, b: Todo): number => {
        const prioA = getPriorityNumber(a.priority);
        const prioB = getPriorityNumber(b.priority);

        if(prioA > prioB) return -1;
        else if(prioA < prioB) return 1;
        return 0;
      });
    }
  }

  console.log("Test")
  return (
    <div className={"h-full text-center w-96 " + className}>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Order by" />
        <Select name="order-select" onSelectedOptionChange={setOrderPolicy} selectedOption={orderPolicy} id="order-select" className="w-full" options={[OrderPolicy.EXPIRE_DATE, OrderPolicy.PRIORITY]} />
      </div>
      <div className="my-8">
        Da completare
        <div className="w-full h-[60%] overflow-y-auto p-5 mt-8 flex flex-col space-y-7">
        {getSortedTodos(orderPolicy).filter(todo => {
          if(todo.done === false) return true;
          return false;
        }).map(todo => {
          return <TodoItem onStatusChange={props.onStatusChange} key={todo.creationDate.toISOString()} todo={todo} />;
        })}
      </div>
      </div>
      <div>
        Già completati
        {getSortedTodos(orderPolicy).filter(todo => {
          if(todo.done === true) return true;
          return false;
        }).map(todo => {
          return <TodoItem onStatusChange={props.onStatusChange} key={todo.creationDate.toISOString()} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
