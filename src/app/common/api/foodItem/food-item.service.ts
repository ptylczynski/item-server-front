import { Injectable } from '@angular/core';
import {SecurityService} from '../security/security.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  constructor(
    private securityService: SecurityService,
    private http: HttpClient
  ) { }

  public getItem(id: number): Observable<any>{
    return this.http.get(
      'http://localhost:8080/api/food/' + id.toString(),
      {
        headers: {
          Authorization: SecurityService.getAuthorizationHeader()
        }
      }
    );
  }

}
