import { TodoService } from './../../services/todos.service';
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-button',
    templateUrl: "./button.component.html",
})
export class ButtonComponent {

    @Input() btnName!:string
    @Input() btnClass !: string
    @Output() btnEventEmitter = new EventEmitter()

    constructor() { }

    onClickBtn() {
        this.btnEventEmitter.emit()
    }
}