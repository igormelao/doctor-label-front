import { Labels } from './model/labels';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor(private httpClient: HttpClient) { }

  labels(){
    return this.httpClient.get<Labels>('http://localhost:8080/labels');
  }
}
