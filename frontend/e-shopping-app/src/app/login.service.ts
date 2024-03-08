import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //baseUrl:String = "http://localhost:8181/login"
  baseUrl:String = "http:// 3.84.232.92 :8181/login"

  constructor(public httpClient:HttpClient) { }  //DI

  signIn(login:any):Observable<string>{
    return this.httpClient.post(this.baseUrl+"/signIn",login,{responseType:'text'})
  }

  signUp(login:any):Observable<string>{
    return this.httpClient.post(this.baseUrl+"/signUp",login,{responseType:'text'})
  }
}
