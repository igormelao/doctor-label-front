import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string):Observable<any>{
    return this.httpClient.post('http://localhost:8081/auth', {
      email: email,
      password: password,
    });
  }

}
