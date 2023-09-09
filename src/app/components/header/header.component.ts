import { ButtonComponent } from 'src/app/common/button/button.component';
import { TodoService } from './../../services/todos.service';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: ['']
})
export class HeaderComponent {

    isAddTask!: boolean

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
