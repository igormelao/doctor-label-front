import { TokenService } from './token.service';
import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {Token} from './token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  authenticate(email: string, password: string):Observable<HttpResponse<any>>{
    return this.httpClient.post(
      'http://localhost:8081/auth',
      {
      email: email,
      password: password,
      },
      { observe: 'response' }
    ).pipe (
      tap((res) => {
        const authToken:Token = res.body as Token;
        this.userService.saveToken(authToken.token ?? '');
      })
    )
  }
}
