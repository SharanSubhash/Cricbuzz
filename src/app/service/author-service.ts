import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  
  
  constructor(private http:HttpClient) { }

  listOfCountryFromHttp(){
    let observable=this.http.get('https://restcountries.eu/rest/v2/all');
    console.log(observable);
    return observable;
  }

  onSubmit(userData){
    sessionStorage.setItem("userData",JSON.stringify(userData));
  }

  onRegister(){
    sessionStorage.getItem("userData");
  }

  onRegisterToPost(userData){
    //let observable=this.http.post('http://x-workz.mj.milesweb.cloud/v1/save',userData);
   // console.log(observable);
  }
  loggedIn:boolean=false;
  onLogin(logData):boolean {
    let userData: any = JSON.parse(sessionStorage.getItem("userData"));
    if(userData.email === logData.email && userData.password === logData.password) {
      console.log("Authenticated");
      this.loggedIn=true;
      console.log(this.loggedIn);
      return true;
    }else{
      this.loggedIn = false;
      console.log("Not Valid");
      return false;
    }

  }

  isLoggedIn() {
    console.log(this.loggedIn);
    return this.loggedIn;
  }

  logOut(){
    console.log('Invoked logOut...');
    sessionStorage.removeItem("userData");
    this.loggedIn=false;
  }
}
