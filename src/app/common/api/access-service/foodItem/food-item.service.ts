import { Injectable } from '@angular/core';
import {SecurityService} from '../security/security.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {FoodItem} from '../../model/foodItem/food-item';
import {FormGroup} from '@angular/forms';
import {formatDate} from '@angular/common';
import {ToastService} from '../../../toast/toast.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  constructor(
    private securityService: SecurityService,
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  public getItem(id: number): Observable<any>{
    return this.http.get(
      'http://localhost:8080/api/food/' + id.toString(),
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

  getAll(page: number, size: number): Observable<any>{
    return this.http.get(
      environment.baseUrl + 'food/all/',
      {
        headers: {
          Authorization: SecurityService.getAuthorizationHeader()
        },
        params: {
          page: page.toString(),
          size: size.toString()
        }
      }
    ).pipe(
      catchError(
        (err, caught) => this.toastService.resolve(err, caught)
      )
    );
  }

  getIds(): Observable<any>{
    return this.http.get(
      environment.baseUrl + 'food/ids',
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

  post(form: FormGroup): Observable<any>{
    return this.http.post(
      environment.baseUrl + 'food/',
      {},
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', SecurityService.getAuthorizationHeader()),
        params: new HttpParams().set('name', form.value.name.toString())
          .set('description', form.value.description.toString())
          .set('dueDate', form.value.due.toString())
          .set('dateAdded', formatDate(Date.now(), 'yyyy-MM-dd', 'en-US'))
          .set('type', form.value.type.toString())
          .set('addressDAO', form.value.address.toString())
      }
    ).pipe(
      catchError(
        (err, caught) => this.toastService.resolve(err, caught)
      )
    );
  }
 // TODO move security to interceptor
  delete(id: number): Observable<any>{
    return this.http.delete(
      environment.baseUrl + 'food/' + id.toString(),
      {
        headers: {
          Authorization: SecurityService.getAuthorizationHeader()
        }
      }
    ).pipe(
      catchError(
        (err, caught) => this.toastService.resolve(err, caught)
      ),
      tap(
        () => this.toastService.success('Item deleted')
      )
    );
  }

  put(form: FormGroup): Observable<any>{
    return this.http.put(
      environment.baseUrl + 'food/' + form.value.id.toString(),
      {},
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', SecurityService.getAuthorizationHeader()),
        params: new HttpParams().set('name', form.value.name.toString())
          .set('description', form.value.description.toString())
          .set('dueDate', form.value.due.toString())
          .set('dateAdded', formatDate(Date.now(), 'yyyy-MM-dd', 'en-US'))
          .set('type', form.value.type.toString())
          .set('addressDAO', form.value.address.toString())
      }
    ).pipe(
      catchError(
        (err, caught) => this.toastService.resolve(err, caught)
      ),
      tap(
        () => this.toastService.success('Item updated')
      )
    );
  }

}
