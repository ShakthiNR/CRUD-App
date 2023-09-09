import { Injectable, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class TodoService {

    isToggle: boolean = true;

  
    btnEvnt = new BehaviorSubject(this.isToggle)

    constructor() { 
     
    }

    handleToggle() {
        this.isToggle = !this.isToggle;
        this.btnEvnt.next(this.isToggle);
    }
}