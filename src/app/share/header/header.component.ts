import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }


}
