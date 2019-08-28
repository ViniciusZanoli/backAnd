import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  // url = 'http://localhost:8080/server/rest/list';

  constructor(private http: HttpClient) { }

  ngOnInit() {
	  
  }

  listar() : Observable<any>{
    return this.http.get('http://localhost:8080/server/rest/list');
  }
  
}