import { Routes } from '@angular/router';
import {ReactiveFormComponent} from "./components/reactive-form/reactive-form.component";
import {TemplateDrivenFormComponent} from "./components/template-driven-form/template-driven-form.component";

export const routes: Routes = [
  {path:'',redirectTo:'/reactive',pathMatch:'full'},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'template',component:TemplateDrivenFormComponent},
];
