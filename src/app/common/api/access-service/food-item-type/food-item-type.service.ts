import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SecurityService} from '../security/security.service';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodItemTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(
      environment.baseUrl + 'type/food/all',
      {
        headers: {
          Authorization: SecurityService.getAuthorizationHeader()
        }
      }
    );
  }
}
