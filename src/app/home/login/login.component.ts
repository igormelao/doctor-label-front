import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit():void {
  }

  login(){
   this.authService.authenticate(this.email, this.password).subscribe(()=> {
     this.router.navigate(['cases']);
   }, (error) => {
     alert("User or password invalid!");
     console.log(error);
     this.router.navigate(['']);
   })
  }

}
