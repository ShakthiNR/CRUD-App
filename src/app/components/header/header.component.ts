import { TodoService } from './../../services/todos.service';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

    isAddTask!: boolean
    appTitle:string = "Ng Todo"

    constructor(private todoService: TodoService, private _router: Router) {
        this.todoService.btnEvnt.subscribe((value) => {
            this.isAddTask = value;
        })
    }

    hasRoute(route:string){
        return this._router.url === route
    }

    get btnClass(): string {
        if (this.isAddTask)
            return "bg-green-500 text-white px-[5px] py-[2px]"
        else
            return "bg-red-500 text-white px-[5px] py-[2px]"
    }


    handleBtnClick() {
        this.todoService.handleToggle()
    }

}
