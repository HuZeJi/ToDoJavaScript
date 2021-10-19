import { ToDo } from "./../classes";
import { toDoList } from "./../index";

//* HTML References
const divToDoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");

const deleteAllDoneButton = document.querySelector(".clear-completed");

const ulFilter = document.querySelector(".filters");
const anchorFilters = document.querySelectorAll(".filtro");

export const createToDoHTML = (task) => {
    const htmlTask = `
    <li class="${task.done ? "completed" : ""}" data-id="${task.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${task.done ? "checked" : ""}>
            <label>${task.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> 
    `;

    const div = document.createElement("div");
    div.innerHTML = htmlTask;

    divToDoList.append(div.firstElementChild);
    return div;
};

//* Events
txtInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const newTodo = new ToDo(txtInput.value);
        toDoList.newToDo(newTodo);

        createToDoHTML(newTodo);

        txtInput.value = "";
    }
});

divToDoList.addEventListener("click", (event) => {
    const elementName = event.target.localName; // input, label, button
    const toDoElement = event.target.parentElement.parentElement; // li

    const toDoId = toDoElement.getAttribute("data-id");

    if (elementName.includes("input")) {
        //* click en el check
        toDoList.markComplete(toDoId);
        toDoElement.classList.toggle("completed");
    } else if (elementName.includes("button")) {
        //* click on the delete button
        toDoList.deleteToDo(toDoId);
        divToDoList.removeChild(toDoElement);
    }
});

deleteAllDoneButton.addEventListener("click", () => {
    toDoList.deleteAllDone();

    const doneElements = divToDoList.querySelectorAll(".completed");
    doneElements.forEach((element) => {
        divToDoList.removeChild(element);
    });
});

ulFilter.addEventListener("click", (event) => {
    const filter = event.target.text;
    if (!filter) {
        return;
    }

    anchorFilters.forEach((element) => {
        element.classList.remove("selected");
    });

    event.target.classList.add("selected");

    for (const element of divToDoList.children) {
        element.classList.remove("hidden");
        const done = element.classList.contains("completed");

        switch (filter) {
            case "Pendientes":
                if (done) {
                    element.classList.add("hidden");
                }
                break;
            case "Completados":
                if (!done) {
                    element.classList.add("hidden");
                }
                break;
        }
    }
});
