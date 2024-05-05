import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiUrl: string =  `${environment.backendPrefix}/api/v1/test`; 

  constructor(private http: HttpClient
    ) { }



  getHellword(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}
