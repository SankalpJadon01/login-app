import { Component } from '@angular/core';
import { Login } from '../login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cred: Login = new Login;
  roles: string[] = ["Admin","User","Guest"];
  msg: string = "";

  constructor(private router:Router){}

  authenticate(){
    if(this.cred.username === "scott" && this.cred.password === "jaguar"){
      if(this.cred.role==="Admin")
      this.router.navigate(["/admin"]);
    else if(this.cred.role === "User")
    this.router.navigate(["/user"]);
  else 
    this.router.navigate(["/guest"]);
    }
    else
    this.msg = "Invalid Username/Password";
  }

}
