export class ToDo {
    static fromJson({ id, task, done, createDate }) {
        const tempTask = new ToDo(task);

        tempTask.id = id;
        tempTask.done = done;
        tempTask.createDate = createDate;

        return tempTask;
    }

    constructor(task) {
        this.task = task;
        this.id = new Date().getTime();
        this.done = false;
        this.createDate = new Date();
    }

    printTask() {
        console.log(this.task);
    }
}
