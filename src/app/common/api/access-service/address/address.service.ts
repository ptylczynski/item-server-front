import { Injectable } from '@angular/core';
import {SecurityService} from '../security/security.service';
import {Address} from '../../model/address/address';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {ToastService} from '../../../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient,
              private toastService: ToastService) { }

  getAll(): Observable<any>{
    return this.http.get<any>(
      environment.baseUrl + 'address/all/',
      {
        headers: {
          Authorization: SecurityService.getAuthorizationHeader()
        }
      }
    ).pipe(
      catchError(
        (err, caught) => this.toastService.resolve(err, caught)
      )
    );
  }
}
