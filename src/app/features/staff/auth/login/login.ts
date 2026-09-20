import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    ReactiveFormsModule,
    RouterLink
  ],

  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  showPassword = signal(false);
  errorMessage = signal('');

  private readonly STAFF_USER = 'AD-STAFF';

  private readonly STAFF_PASSWORD =
    'AD#Staff_2026!Access$Panel_8Kx72@Secure';


  loginForm;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.loginForm = this.fb.nonNullable.group({

      username: [
        '',
        [
          Validators.required
        ]
      ],

      password: [
        '',
        [
          Validators.required
        ]
      ]

    });

  }


  togglePassword(): void {
    this.showPassword.update(value => !value);
  }


  login(): void {

    this.errorMessage.set('');

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      this.errorMessage.set(
        'Ingresa tu usuario y contraseña.'
      );

      return;
    }


    const username =
      this.loginForm.getRawValue().username.trim();

    const password =
      this.loginForm.getRawValue().password;


    if (
      username !== this.STAFF_USER ||
      password !== this.STAFF_PASSWORD
    ) {

      this.errorMessage.set(
        'El usuario o la contraseña son incorrectos.'
      );

      return;
    }


    // =========================================================
    // SESIÓN TEMPORAL
    // =========================================================

    localStorage.setItem(
      'ad_staff_auth',
      'true'
    );

    localStorage.setItem(
      'ad_staff_user',
      username
    );


    this.router.navigate(
      ['/empleados/home'],
      {
        replaceUrl: true
      }
    );

  }

}