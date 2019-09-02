import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
	headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // enviaLogin(user){
  //   let body = JSON.stringify(user);
  //   return this.http.post('/server/rest/login', body, httpOptions);
  // }

}
