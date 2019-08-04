import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  onPlayerSearch(userData){
    let observable=this.http.get("https://cricapi.com/api/playerFinder?apikey=fUmxLJVPcoaKf2KCpgH6qWYjjfz1&name="+userData);
    return observable;
  }

  getPlayerStatistics(playerId){
    return this.http.get("https://cricapi.com/api/playerStats?apikey=fUmxLJVPcoaKf2KCpgH6qWYjjfz1&pid="+playerId);
  }

  getUpcomingMatches(){
    let observable=this.http.get("https://cricapi.com/api/matchCalendar?apikey=fUmxLJVPcoaKf2KCpgH6qWYjjfz1");
    return observable;
  }
}
