import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {noSpace} from "../../validitors/nospace.validators";


@Component({
  selector: 'app-reactive-from-builder',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './reactive-from-builder.component.html',
  styleUrl: './reactive-from-builder.component.scss'
})
export class ReactiveFromBuilderComponent {

  form:any
  constructor(fg:FormBuilder) {
    this.form=fg.group({
      username:['',
        [Validators.required,
        Validators.minLength(5),
          noSpace.noSpaceValidation
        ]],

      password:['',[
        Validators.required]]
    })
  }


  get fg(){
    return this.form.controls
  }

  onClick(){
    console.log(this.form.value)
  }
}
