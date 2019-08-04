import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../service/author-service';
import { HttpClientModule} from '@angular/common/http';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShowHidePasswordModule
  ],
  providers:[]
})
export class AuthorizationModule { }
