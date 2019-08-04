import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';
import {MatDialog} from '@angular/material/dialog';
import { PlayerstatisticsComponent } from '../playerstatistics/playerstatistics.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerInfo;
  rows = [];
  headElements=["Player ID","Name","View Details"];
  showTable=false;
  constructor(private builder:FormBuilder,private playerService:PlayerService,private router:Router,public dialog: MatDialog) { 
  
  }

  playerForm=this.builder.group({
    playerName:['',[Validators.required,Validators.minLength(4)]]
  });
    
  ngOnInit() {
  }

  onSearch(){
    this.showTable=true;
    console.log("Invoked onSearch...");
    console.log(this.playerForm.controls.playerName.value);
    this.playerService.onPlayerSearch(this.playerForm.controls.playerName.value);
    //this.authorService.onPlayerSearch(this.playerForm.controls.playerName.value).subscribe(resp=>{this.playerInfo=resp});
    this.playerService.onPlayerSearch(this.playerForm.controls.playerName.value).subscribe(response=>{console.log(response);
      let d:any=response;          
      this.playerInfo=d.data;
      this.rows=d.data;
              },err=>{console.log(err);});
    //console.log(this.playerInfo);
  }

  onViewDetails(playerId)
  {
    console.log('Invoked onViewDetails...Player Id='+playerId);
    sessionStorage.setItem("playerId",playerId);
   // this.router.navigate(["/home/playerstatistics"],{queryParams:{"playerID":playerId}});
   const dialogRef = this.dialog.open(PlayerstatisticsComponent);

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
  }
}
