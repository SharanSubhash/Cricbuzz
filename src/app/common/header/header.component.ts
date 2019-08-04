import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/service/author-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthorService,private router:Router) { }

  ngOnInit() {
  }

  logOut()
  {
    console.log('Invoked logOut...');
    this.authService.logOut();
    this.router.navigate(['/author/login']);
  }
}
