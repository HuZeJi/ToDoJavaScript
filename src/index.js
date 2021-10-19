import { ToDoList, ToDo } from "./classes";
import { createToDoHTML } from "./js/components";
import "./styles.css";

export const toDoList = new ToDoList();

// toDoList.toDos.forEach((toDo) => createToDoHTML(toDo));
//* works when your only have one parameter
toDoList.toDos.forEach(createToDoHTML);

// const task = new ToDo("Learn JS");

// toDoList.newToDo(task);

// createToDoHTML(task);
