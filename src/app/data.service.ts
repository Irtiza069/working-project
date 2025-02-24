import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apirr="http://localhost:3000/login"
  private apiUrl = 'http://localhost:3000/ffs'; // Base URL for your API

  constructor(private http: HttpClient) {}

  // Method to fetch data (GET request)
  getData(){
    return this.http.get(this.apiUrl)
  }

  // Method to submit data (POST request)
  postData(data: any) {
    return this.http.post(this.apiUrl, data)
    ;
  }
 deletedata(id:any){
  return this.http.delete(`http://localhost:3000/ffs/${id}`)
 }
  postlogindata(data:any){
    return this.http.post(this.apirr,data)
  }
  updateData(id: any, updatedData: any) {
    return this.http.put(`http://localhost:3000/ffs/${id}`, updatedData);
  }
  
}
