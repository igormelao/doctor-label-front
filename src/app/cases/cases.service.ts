import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TokenService } from './../authentication/token.service';
import { Case } from './model/cases';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  getNextCase(){
    const token = this.tokenService.returnToken();
    return this.httpClient.get<Case>('http://localhost:8081/cases/nextCase',
    { headers: new HttpHeaders({'Authorization': 'Bearer ' + token}) });
  }

  saveLabel(idCase: number, idLabel: number, idUser: number){
    const token = this.tokenService.returnToken();
    return this.httpClient.post(`http://localhost:8081/cases/${idCase}/label`,
    {
      idLabel: idLabel,
      idUser: idUser
    },
    {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token})
    });
  }

}

