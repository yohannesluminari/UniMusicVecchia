import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginData } from '../../../models/Login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData: ILoginData = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    this.authService.login(this.loginData)
      .subscribe(
        data => {
          console.log('Login successful:', data);
          this.router.navigate(['travels']);
        },
        error => {
          console.error('Login error:', error);
          // Handle login error, show error message, etc.
        }
      );
  }
}
