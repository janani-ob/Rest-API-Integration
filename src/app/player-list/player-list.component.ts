import { Component, OnInit } from '@angular/core';
import playerDetails from '../player-list.json';

interface Player {
  id: Number;
  name: String;
  age: Number;
  gender: String;
  status: String;
}

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  constructor() { }

  players: Player[] = playerDetails;

  ngOnInit(): void { }


}
