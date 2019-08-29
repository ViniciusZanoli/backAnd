import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  url = 'http://localhost:8080/server/rest/list';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.url);
  }

}