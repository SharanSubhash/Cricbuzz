import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent} from 'src/app/common/header/header.component';
import { SlidebarComponent } from 'src/app/common/slidebar/slidebar.component';
import { PlayerComponent } from './player/player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../service/author-service';
import { HttpClientModule} from '@angular/common/http';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import { PlayerService } from '../service/player.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule,MatIconModule,MatListModule, MatFormFieldModule,MatNativeDateModule,MatInputModule} from '@angular/material';
import { UpcomingmatchesComponent } from './upcomingmatches/upcomingmatches.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [HomeComponent,
    HeaderComponent,SlidebarComponent, PlayerComponent, PlayerstatisticsComponent, UpcomingmatchesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxDatatableModule,MatListModule,
    MatSidenavModule,MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule, MatFormFieldModule,MatNativeDateModule,MatInputModule
  ],
  providers:[PlayerService]
})
export class HomeModule { }
