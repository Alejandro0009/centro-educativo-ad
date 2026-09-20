import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-staff-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  username = 'AD-STAFF';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    // localStorage solamente existe en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.username =
        localStorage.getItem('ad_staff_user')
        ?? 'AD-STAFF';
    }
  }

  logout(): void {

    // Evita errores durante SSR / prerender
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('ad_staff_auth');
      localStorage.removeItem('ad_staff_user');
    }

    this.router.navigate(
      ['/empleados/login'],
      { replaceUrl: true }
    );
  }
}