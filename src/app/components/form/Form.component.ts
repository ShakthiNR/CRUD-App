import { TodoService } from './../../services/todos.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms"
import styles from "../../common/helper/styles"
import { ITodos } from "src/app/common/helper/types";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {

    addTaskForm: FormGroup = new FormGroup({});
    formInputStyle:string = styles.formInput
    submitBtnStyle:string = styles.submitBtn


    constructor(private formBuilder: FormBuilder, private todoServices:TodoService) {
     }

    ngOnInit(): void {
        this.addTaskForm = this.formBuilder.group({
            taskName: new FormControl("", [Validators.required]),
            deadline: new FormControl("", [Validators.required])
        })
    }

    handleSubmit() {
        this.todoServices.addTodos(this.addTaskForm.value)
        this.addTaskForm.reset()
    }
}