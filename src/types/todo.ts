import { Priority } from "./priorityEnum";

/*
 * Represents a TODO in this application
 */
interface Todo {
  title: string;
  expireDate: Date;
  done: boolean;
  // Uniquely identifies a todo
  creationDate: Date;
  priority: Priority;
}

export default Todo;
