import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ITodos } from "../common/helper/types";

@Injectable({
    providedIn: "root"
})
export class TodoService {

    isToggle: boolean = true;
    todos: ITodos[] = []
    hasTodos = JSON.parse(localStorage.getItem("snr-ng-todos") as string)


    btnEvnt = new BehaviorSubject(this.isToggle);
    todoEvnt =  new BehaviorSubject(this.hasTodos ? this.hasTodos : []);

    constructor() {
        if(this.hasTodos) {
            this.todos = this.hasTodos
        }
    }

    handleToggle() {
        this.isToggle = !this.isToggle;
        this.btnEvnt.next(this.isToggle);
    }

    deleteTodo(todoId: number) {
        this.todos = this.todos.filter(elm => elm.id !== todoId)
        localStorage.setItem('snr-ng-todos', JSON.stringify(this.todos));
        this.todoEvnt.next(this.todos)
    }

    addTodos(todo: any) {
        todo.id = new Date().valueOf()
        this.todos.push(todo)
        localStorage.setItem('snr-ng-todos', JSON.stringify(this.todos))
        this.todoEvnt.next(this.todos)
    }
}