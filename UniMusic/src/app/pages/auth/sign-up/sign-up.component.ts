import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUp } from '../../../models/SignUp';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  registerData: ISignUp = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    avatarUrl: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    this.authService.register(this.registerData)
      .subscribe(
        data => {
          console.log('Registration successful:', data);
          this.router.navigate(['login']);
        },
        error => {
          console.error('Registration error:', error);
          // Handle registration error, show error message, etc.
        }
      );
  }
}
