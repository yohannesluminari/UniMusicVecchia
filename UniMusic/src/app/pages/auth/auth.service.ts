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

  constructor(private http: HttpClient) {}

  register(userData: ISignUp): Observable<any> {
    return this.http.post<any>(this.registerUrl, userData);
  }

  login(loginData: ILoginData): Observable<any> {
    return this.http.post<any>(this.loginUrl, loginData);
  }
}
