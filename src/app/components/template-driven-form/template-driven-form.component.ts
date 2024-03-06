import { Component } from '@angular/core';
import {FormsModule, NgForm, NgModel} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass,

  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {

  onSubmit(f:NgForm){
    console.log(f.value)
  }
  getValue(f:any){
    console.log(f)
  }
}
