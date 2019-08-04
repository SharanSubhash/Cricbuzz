import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorService } from './author-service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  

  constructor( private router: Router,private auth:AuthorService) { }

   canActivate(){
     if (this.auth.isLoggedIn()) {
       return true;
     } else {
       console.log('Not Auntheticated');
       this.router.navigate(['author/login']);
     }
   }

}
