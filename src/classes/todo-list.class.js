import { ToDo } from ".";

export class ToDoList {
    constructor() {
        // this.toDos = [];
        this.localStorageLoad();
    }

    newToDo(task) {
        this.toDos.push(task);
        this.localStorageSave();
    }

    deleteToDo(id) {
        this.toDos = this.toDos.filter((toDo) => toDo.id != id);
        this.localStorageSave();
    }

    deleteAllDone() {
        this.toDos = this.toDos.filter((toDo) => !toDo.done);
        this.localStorageSave();
    }

    markComplete(id) {
        this.toDos.forEach((toDo) => {
            toDo.done = toDo.id == id ? !toDo.done : toDo.done;
        });
        this.localStorageSave();
    }

    localStorageSave() {
        localStorage.setItem("toDos", JSON.stringify(this.toDos));
    }

    localStorageLoad() {
        const lsToDos = localStorage.getItem("toDos");
        this.toDos = lsToDos ? JSON.parse(lsToDos) : [];
        this.toDos = this.toDos.map(ToDo.fromJson);
    }
}
