import { TodoService } from './../../services/todos.service';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

    isAddTask!: boolean
    appTitle:string = "Ng Task Tracker";

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
            return "bg-[#6d28d9] text-sm text-white px-[5px] py-[5px]"
        else
            return "bg-red-500 text-sm text-white px-[5px] py-[5px]"
    }


    handleBtnClick() {
        this.todoService.handleToggle()
    }

}
