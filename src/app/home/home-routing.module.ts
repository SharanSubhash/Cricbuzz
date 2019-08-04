import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PlayerComponent } from './player/player.component';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import { UpcomingmatchesComponent } from './upcomingmatches/upcomingmatches.component';
import { AuthguardService } from '../service/authguard.service';

const routes: Routes = [
  { path:'',
  component:HomeComponent,
  canActivate:[AuthguardService],
  children:[
    { path:'player',component:PlayerComponent},
    { path:'playerstatistics',component:PlayerstatisticsComponent},
    { path:'upcomingmatches',component:UpcomingmatchesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
