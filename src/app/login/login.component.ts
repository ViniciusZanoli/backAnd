import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validator } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/server/rest/login';

  ngOnInit() {
    this.userForm = new FormGroup({
      identifier: new FormControl(),
      password: new FormControl()
    });
    
  }

  fazerLogin(){
      this.http.post(this.url, this.userForm.value).toPromise().then(
        data =>{ console.log(data); }  
      );
  }

}
