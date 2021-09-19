import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { loginModel } from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : loginModel=new loginModel();
  responseString!: String;
  isvalid:boolean=true;

  constructor(private router: Router,private loginService: LoginServiceService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    const req=this.loginService.loginUser(this.loginForm);
   
    req.subscribe(data=>this.responseString=data);
    console.log("daaatta "+this.responseString);
    

  }

  Onclick(isvalidtrue: boolean){
    this.isvalid=isvalidtrue;
  }
  // loginUser(){
    
  //   const req=this.loginService.loginUser(this.loginForm);
  //   //  console.log("dddd "+res)
  //   req.subscribe(data=>this.responseString=data);
  //   req.subscribe(data=>this.responseString=data);
  //   console.log("daaatta "+this.responseString);
  // }

}
