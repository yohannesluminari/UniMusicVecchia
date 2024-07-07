import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../models/environmentPgAdminSpringJAva/environment';
import { ILoginData } from '../../models/Login';
import { ISignUp } from '../../models/SignUp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = environment.registerUrl;
  private loginUrl = environment.loginUrl;

  private apiUrl = 'http://localhost:8080/users'; // URL base dell'API

  constructor(private http: HttpClient) {}

  login(loginData: ILoginData): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  register(registerData: ISignUp): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerData);
  }
}
