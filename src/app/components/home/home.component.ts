import { TodoService } from './../../services/todos.service';
import { Component } from "@angular/core"

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styles: ['']
})
export class HomeComponent {
    isAddTask !: boolean
    
    constructor(public todoService: TodoService) {
        this.todoService.btnEvnt.subscribe((isToggle) => {
            this.isAddTask = isToggle
        })
    }
}