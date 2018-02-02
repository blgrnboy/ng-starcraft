import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { PlayerService } from '../player.service';
import { PlayerMatch } from '../models/player-match';
import { PlayerMatches } from '../models/player-matches';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit, OnDestroy {

  isLoading = true;
  playerObs$: Observable<any>;
  playerId: number;
  playerName: string;
  playerMatches: PlayerMatches;
  private routeParamSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.playerId = +data['id'];
      this.retrieveProfile();
    });
  }

  retrieveProfile() {
    console.log('Load profile for player with id ' + this.playerId);
    this.playerName = 'jyemma';
    this.getPlayerMatches();
  }

  getPlayerMatches() {
    this.playerService.getPlayerMatches(this.playerId).subscribe(data => {
      this.playerMatches = data;
      console.log(this.playerMatches);
      this.isLoading = false;
    },
    error => {
      // nothing in here yet
      this.isLoading = false;
    },
    () => {
      // complete
    });
  }

  ngOnDestroy() {
    if (this.routeParamSub) {
      this.routeParamSub.unsubscribe();
    }
  }
}
