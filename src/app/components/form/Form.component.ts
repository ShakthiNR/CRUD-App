import { TodoService } from './../../services/todos.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms"

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {

    addTaskForm: FormGroup = new FormGroup({});
    formInputStyle:string = "border-slate-500 border-[1px] py-[1px] px-[5px] w-[100%]"
    submitBtnStyle:string = "py-[1px] px-[5px] cursor-pointer w-[100%] border-[1px] border-black bg-black text-white"
    disabledSubmitBtnStyle:string = "py-[1px] px-[5px] cursor-pointer w-[100%]  bg-gray-500 text-white"

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


    getSubmitBtnStyle(isFormInValid: boolean): string {
        if (!isFormInValid) return this.submitBtnStyle;
        else return this.disabledSubmitBtnStyle

    }
}