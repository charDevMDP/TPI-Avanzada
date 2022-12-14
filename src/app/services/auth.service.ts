import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from '../models/user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Response } from '../models/response';

import { map, catchError } from 'rxjs/operators';
import {throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://utn-lubnan-api-4.herokuapp.com/api'
  private token:any = null;
  redirectUrl: string = '';
  private isLogged: boolean = false;
  private user:any = null;

  constructor(private http:HttpClient, private router: Router) {}

  login(user:User):any{

    // configuracion para para peticion
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(this.url+'/User/Login',user,httpOptions);

  }

  getToken(){
    return this.token
  }

  getIsLogged(){
    return this.isLogged
  }
  
  getUser(){
    return this.user
  }
  logout(): void {
    sessionStorage.removeItem('token');
    this.token = undefined;
    this.isLogged = false
    this.router.navigate([''])
  }

}