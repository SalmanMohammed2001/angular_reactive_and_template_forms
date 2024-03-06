import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    ReactiveFormsModule,
    NgForOf,
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {


  form:any;
  emailPattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
  contactRegex='^07\\d{8}$'

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
      address:new FormControl('', Validators.required),


      // sub form group
      contactDetails:new FormGroup({
        shippingAddress:new FormControl('',[Validators.required]),
        contactNumber:new FormControl('',[Validators.required,
        Validators.pattern(this.contactRegex)
        ])

      }),

      skills: new FormArray([])

    })
  }

  get fullName(){
    return this.form.get('fullName')
  }
  get email(){
  return this.form.get('email');
  }
  get address(){
    return this.form.get('address');
  }

  get shippingAddress(){
    return this.form.get('contactDetails.shippingAddress');
  }
  get contactNumber(){
    return this.form.get('contactDetails.contactNumber');
  }
  get Skills(){
    return this.form.get('skills') as FormArray;
  }



  onSubmit(){
    console.log(this.form.value)
  }

  addSkills(skills:HTMLInputElement){
    this.Skills.push(new FormControl(skills.value))

    skills.value=''
    console.log(this.form.value)
  }

}
