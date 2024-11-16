import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environment/environment';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationReq } from '@models/authentication-req.model';
import { RegisterReq } from '@models/register-req.model';
import { InfoSession } from '@models/info-session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl + 'users';
  private http = inject(HttpClient);

  private _currentUserName = signal<string | null>(null);
  private _userId = signal<number | null>(null);

  public currentUserName = computed(() => this._currentUserName());
  public userId = computed(() => this._userId());

  signIn(authentication: AuthenticationReq): Observable<boolean> {
    const url = this.baseUrl + '/login';
    return this.http.post<InfoSession>(url, authentication)
      .pipe(
        tap((response: InfoSession) => {
          this._currentUserName.set(response.username);
          this._userId.set(response.userId);
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);
          localStorage.setItem('userId', response.userId.toString());
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
    this._currentUserName.set(null);
    this._userId.set(null);

    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
  }

  public get token(): string {
    return localStorage.getItem('token')!;
  }

  public get username(): string {
    return localStorage.getItem('username')!;
  }

  public get user_id(): number {
    return Number(localStorage.getItem('userId'));
  }

}
