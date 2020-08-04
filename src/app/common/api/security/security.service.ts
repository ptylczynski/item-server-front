import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private static _password: string;
  private static _username: string;

  static get password(): string {
    if (this._password.length === 0) { return ''; }
    return this._password;
  }

  static set password(value: string) {
    this._password = value;
  }

  static get username(): string {
    if (this._username.length === 0) {return ''; }
    return this._username;
  }

  static set username(value: string) {
    this._username = value;
  }

  static getAuthorizationHeader(): string{
    return 'Basic ' + btoa('test:test');
    // return 'Basic' + btoa('${this._username}:${this._password}');
  }
  constructor() { }
}
