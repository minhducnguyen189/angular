import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  apiUrl = 'http://localhost:7070';


  getAdminMessage(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/v1/secure/messages/admin`);
  }


  callPostMessage(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/v1/secure/messages/admin`, {});
  }

}
