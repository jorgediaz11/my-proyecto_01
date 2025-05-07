// diccionario de datos 002

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAnticipoSchema } from '../interface/AnticipoSchema';

@Injectable({
  providedIn: 'root'
})

export class AdvanceRequestService {

  private url = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getAllAnticipo(numero_solicitud:any = null, page: number = 1, pageSize: number = 10): Observable<ResponseAnticipoSchema>{
    const urlGetAll = `${this.url}/advance-request/${numero_solicitud}/${page}/${pageSize}`;
    return this.http.get<ResponseAnticipoSchema>(urlGetAll);
  }

  getByNumeroAnticipo(numero_solicitud:string): Observable<ResponseAnticipoSchema>{
    const urlGetByNumero = `${this.url}/advance-request/${numero_solicitud}`;
    return this.http.get<ResponseAnticipoSchema>(urlGetByNumero);
  }
}
