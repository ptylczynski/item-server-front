import { Injectable } from '@angular/core';
import {SecurityService} from '../security/security.service';
import {Address} from '../../model/address/address';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>(
      environment.baseUrl + 'address/all/',
      {
        headers: {
          Authorization: SecurityService.getAuthorizationHeader()
        }
      }
    );
  }
}
