import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from './register/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private httpClient: HttpClient) { }

  register(registerModel:RegisterModel){
   
    console.log("json "+JSON.stringify(registerModel));
    return this.httpClient.post("http://localhost:2529/v1/register",registerModel);
     
  }
}
