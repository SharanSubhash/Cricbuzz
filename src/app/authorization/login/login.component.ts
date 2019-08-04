import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/service/author-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private builder: FormBuilder, private router: Router,private authguard:AuthorService) { }
  loginForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  ngOnInit() {
  }

  onLogin() {
    console.log(this.loginForm.value);
    let userData: any = JSON.parse(sessionStorage.getItem("userData"));
    if (this.authguard.onLogin(this.loginForm.value)) {
      console.log("Authenticated");
      this.authguard.loggedIn=true;
      this.router.navigate(['home']);
    }
    else {
      console.log("Not Valid");
      this.router.navigate(['author/register']);
    }

  }


}
