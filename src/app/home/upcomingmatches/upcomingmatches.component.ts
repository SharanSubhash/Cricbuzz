import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-upcomingmatches',
  templateUrl: './upcomingmatches.component.html',
  styleUrls: ['./upcomingmatches.component.css']
})
export class UpcomingmatchesComponent implements OnInit {

  rows = [];
  temp;
  constructor(private playerService: PlayerService) {

  }

  ngOnInit() {
    this.getUpcomingMatches();
  }

  getUpcomingMatches() {
    this.playerService.getUpcomingMatches().subscribe(response => {
      console.log(response);
      let d: any = response;
      this.rows = d.data;
      this.temp = d.data;
    }, err => { console.log(err); });
  }

  filterByDate(date: Date) {
    let day = new Date(date);
    this.rows = this.temp.filter(obj =>
      new Date(obj.date).getDate() == day.getDate() &&
      new Date(obj.date).getMonth() == day.getMonth() && 
      new Date(obj.date).getFullYear() == day.getFullYear())

  }
}
