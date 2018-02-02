import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PlayerService } from '../player.service';
import { PlayerBase } from '../models/player-base';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  playerNameForm = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  foundPlayers: PlayerBase[];

  ngOnInit() {
  }

  searchPlayer() {
    const val = this.playerNameForm.value.trim();
    console.log(val);

    this.foundPlayers = this.playerService.searchPlayer('jyemma');

  }

}
