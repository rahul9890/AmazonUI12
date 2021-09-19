import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginModel } from './login/loginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  constructor(private httpClient: HttpClient) { }

  loginUser(loginmodel:loginModel):Observable<String>{
   
    return this.httpClient.get("http://localhost:2529/v1/login"+"/"+loginmodel.emaild+"/"+loginmodel.password,{responseType:'text'});
  }
}
