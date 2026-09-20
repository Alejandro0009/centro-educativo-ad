import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-staff-home',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  username =
    localStorage.getItem('ad_staff_user')
    ?? 'AD-STAFF';


  constructor(
    private router: Router
  ) {}


  logout(): void {

    localStorage.removeItem(
      'ad_staff_auth'
    );

    localStorage.removeItem(
      'ad_staff_user'
    );


    this.router.navigate(
      ['/empleados/login'],
      {
        replaceUrl: true
      }
    );

  }

}