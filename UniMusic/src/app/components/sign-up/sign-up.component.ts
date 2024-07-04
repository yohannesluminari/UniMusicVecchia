import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  // Property to track the current form state
  isRegisterForm: boolean = true; // Default is the registration form

  // Method to switch to the login form
  switchToLogin(event: MouseEvent): void {
    event.preventDefault(); // Prevents the default link behavior
    this.isRegisterForm = false;
  }

  // Method to switch to the register form
  switchToRegister(event: MouseEvent): void {
    event.preventDefault(); // Prevents the default link behavior
    this.isRegisterForm = true;
  }

  // Placeholder for the Continue action on the registration form
  continue(): void {
    // Add logic for handling the registration process
    console.log('Continue registration process');
  }

  // Placeholder for the Login action on the login form
  login(): void {
    // Add logic for handling the login process
    console.log('Proceed with login');
  }
}
