import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/service/author-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  CountryList;
  constructor(private builder:FormBuilder,private authorService:AuthorService, private router:Router) {  
    this.authorService.listOfCountryFromHttp().subscribe(result=>{this.CountryList=result}); 
  }

  registerForm=this.builder.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required,Validators.email]],
    phoneNo:['',[Validators.required,Validators.min(10)]],
    country:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(8)]]
  });
  ngOnInit() {
  }

  onRegister(){
    console.log('invoked Register');
    console.log(this.registerForm.value);
    this.authorService.onSubmit(this.registerForm.value);
    this.authorService.onRegisterToPost(this.registerForm.value);
    this.router.navigate(['author/login']);
  }

}
