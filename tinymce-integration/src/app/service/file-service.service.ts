import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileResponse } from '../model/file';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  uploadFile(file: Blob): Observable<FileResponse> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<FileResponse>(`${this.apiUrl}/v1/files`, formData);
  }

}
