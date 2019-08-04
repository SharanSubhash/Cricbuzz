import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-playerstatistics',
  templateUrl: './playerstatistics.component.html',
  styleUrls: ['./playerstatistics.component.css']
})
export class PlayerstatisticsComponent implements OnInit {
  playerInfo;
  public isCollapsed = false;
  constructor(private activatedRoute:ActivatedRoute,private playerService:PlayerService) { }

  ngOnInit() {
  // let pid=this.activatedRoute.snapshot.queryParamMap.get("playerID");
  // console.log(pid);
 //  this.getPlayerStatistics(pid);

  let id= sessionStorage.getItem("playerId");
    this.getPlayerStatistics(id);
  }

  getPlayerStatistics(playerId){
      this.playerService.getPlayerStatistics(playerId).subscribe(response=>{console.log(response);
        this.playerInfo=response;
    },err=>{console.log(err);
    });
  }
}
