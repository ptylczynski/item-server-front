import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Permissions} from '../../../common/permissions/permissions.enum';
import {Observable} from 'rxjs';
import {Constants} from '../../../common/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(permission: Permissions): Observable<any>{
    return this.http.get(
      Constants.API_URL + '/bundle/all',

    )
  }
}
