import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './RegisterModel';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterServiceService } from '../register-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm :RegisterModel=new RegisterModel();
  constructor(private router: Router,private registerService:RegisterServiceService,private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  registerUser():void{
    console.log("in register ",JSON.stringify(this.registerForm))
    this.registerService.register(this.registerForm).subscribe();
      
    
    
     window.alert('Registration success')
}

}
