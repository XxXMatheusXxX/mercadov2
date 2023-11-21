import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Isection } from './isection';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private readonly API ="http://localhost:3000/produtos";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Isection[]>(this.API);
  }
}
