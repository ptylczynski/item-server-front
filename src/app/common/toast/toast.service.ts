import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Observable, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(protected toastrService: ToastrService) { }

  success(message: string): void{
    this.toastrService.success(message, 'Success');
  }

  error(message: string): void{
    this.toastrService.error(message, 'Error');
  }

  resolve(error, caught: Observable<any>): Observable<never>{
    let message: string;
    console.log(typeof error);
    if (error instanceof HttpErrorResponse){
      if (error.status === 0){
        message = 'Backend server offline';
      }
      else {
        message = error.status + ': ' + error.error.reason;
      }
      this.error(message);
    }
    return throwError(error);
    // return caught;
  }
}
