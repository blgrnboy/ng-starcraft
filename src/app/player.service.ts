import { Injectable } from '@angular/core';
import { PlayerBase } from './models/player-base';

@Injectable()
export class PlayerService {

  constructor() { }

  searchPlayer(name: string): PlayerBase[] {
    const results: PlayerBase[] = [];
    const samplePlayer = new PlayerBase();
    samplePlayer.playerId = 1;
    samplePlayer.playerName = 'jyemma';
    results.push(samplePlayer);

    return results;
  }

}
