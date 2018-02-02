import { Injectable } from '@angular/core';
import { PlayerBase } from './models/player-base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PlayerMatches } from './models/player-matches';

@Injectable()
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  searchPlayer(name: string): PlayerBase[] {
    const results: PlayerBase[] = [];
    const samplePlayer = new PlayerBase();
    samplePlayer.playerId = 1;
    samplePlayer.playerName = 'jyemma';
    results.push(samplePlayer);

    return results;
  }

  getPlayerMatches(playerId: number): Observable<PlayerMatches> {
    return this.httpClient.get<PlayerMatches>('assets/samplePlayerMatches.json');
  }

}
