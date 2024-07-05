import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../models/environmentPgAdminSpringJAva/environment';
import { ILoginData } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(loginData: ILoginData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}${environment.endpoints.login}`, loginData);
  }
}
