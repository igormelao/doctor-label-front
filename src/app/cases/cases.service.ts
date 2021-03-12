import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TokenService } from './../authentication/token.service';
import { Cases } from './model/cases';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  getCases(){
    const token = this.tokenService.returnToken();
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Authorization', token);

    return this.httpClient.get<Cases>('http://localhost:8081/cases/');
  }
}

