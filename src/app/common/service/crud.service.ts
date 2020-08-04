import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseUrl: string = 'localhost:8080/api';
  constructor() { }

  public getAllItems(page: int, size: int){

  }
}
