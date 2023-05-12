import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8101';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(user_data: any): Observable<any>{
    return this.http.post<any>(`${baseUrl}/user/addUser`, user_data);
  }

}
