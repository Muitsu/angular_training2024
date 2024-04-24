import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/emp';
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  url="https://dummy.restapiexample.com/api/v1/employees"
  constructor(private http:HttpClient) { }

  getAllEmp(){
    return this.http.get<ApiResponse>(this.url);
  }
}
