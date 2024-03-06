import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
      NgClass,
      ReactiveFormsModule,
    ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {


  form:any;
  emailPattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"

  constructor() {
    this.form= new FormGroup({
      fullName:new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email:new FormControl('',[
        Validators.required,
         Validators.pattern(this.emailPattern)
        // Validators.email
      ]),
      address:new FormControl('',
        Validators.required),
    })
  }

  get fullName(){
    return this.form.get('fullName')
  }
  get email(){
  return this.form.get('email');
  }
  get address(){
    return this.form.get('email');
  }


  onSubmit(){
    console.log(this.form.value)
  }

}
