import { Priority } from "./priorityEnum";

/*
 * Represents a TODO in this application
 */
interface Todo {
  id: string;
  title: string;
  expireDate: Date;
  done: boolean;
  priority: Priority;
}

export default Todo;
