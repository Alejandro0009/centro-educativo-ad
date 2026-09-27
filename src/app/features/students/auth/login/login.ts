import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username = '';
  password = '';
  showPassword = false;
  errorMessage = '';

  // Acceso temporal para probar el flujo.
  private readonly demoUsername = 'estudiante.demo';
  private readonly demoPassword = 'AD!Demo-26_rQ8#Lm7v';

  constructor(private readonly router: Router) {}

  login(): void {
    const validUser = this.username.trim() === this.demoUsername;
    const validPassword = this.password === this.demoPassword;

    if (!validUser || !validPassword) {
      this.errorMessage = 'Usuario o contraseña incorrectos.';
      return;
    }

    this.errorMessage = '';
    void this.router.navigateByUrl('/alumnos/home');
  }
}