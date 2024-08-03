import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loginToken');
  }

  setLoginToken(token: string): void {
    localStorage.setItem('loginToken', token);
  }

  clearLoginToken(): void {
    localStorage.removeItem('loginToken');
  }
}
