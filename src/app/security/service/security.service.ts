import { Injectable } from '@angular/core';
import {SecurityHolder} from '../security-holder/security-holder';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  public getAuthorizationHeader(): string{
    return 'Authorization: Basic ' + btoa(SecurityHolder.username + ':' + SecurityHolder.password);
  }

}
