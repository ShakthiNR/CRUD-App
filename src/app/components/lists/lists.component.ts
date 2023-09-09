import { ITodos } from 'src/app/common/helper/types';
import { TodoService } from './../../services/todos.service';
import { Component } from "@angular/core";

@Component({
    selector:"app-lists",
    templateUrl: "./lists.component.html",
})
export class ListsComponent {
    todos!:ITodos[] 

    constructor(private todoService:TodoService) {
     this.todoService.todoEvnt.subscribe((todos)=>{
        this.todos = todos;
     })
    }

    deleteTodo(todoId:number){
        this.todoService.deleteTodo(todoId)
    }

    
}