import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environment/environment';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationReq } from '@models/authentication-req.model';
import { RegisterReq } from '@models/register-req.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl + 'users';
  private http = inject(HttpClient);

  signIn(authentication: AuthenticationReq): Observable<boolean> {
    const url = this.baseUrl + '/login';
    return this.http.post<string>(url, authentication)
      .pipe(
        tap((response: string) => {

          localStorage.setItem('token', response);
        }),
        map(() => true),
      );
  }

  signUp(registerReq: RegisterReq): Observable<boolean> {
    const url = this.baseUrl + '/register';
    return this.http.post(url, registerReq)
      .pipe(
        map(() => true),
      );
  }

  logOut(): void {
    localStorage.removeItem('token');
  }

  public get token(): string {
    return localStorage.getItem('token')!;
  }

}
