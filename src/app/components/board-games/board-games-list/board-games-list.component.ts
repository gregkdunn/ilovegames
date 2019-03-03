import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { IBoardGame } from '../../../interfaces/board-game.interface';

@Component({
  selector: 'gkd-board-games-list',
  styleUrls: ['./board-games-list.component.css'],
  templateUrl: './board-games-list.component.html'

})
export class BoardGamesListComponent {
  @Input() public boardGames$: Observable<IBoardGame[]>;
  @Output() public removeBoardGame: EventEmitter<IBoardGame> = new EventEmitter();

  public handleRemoveClick(boardGame: IBoardGame) {
    // console.log('gift-card-list.handleRemoveClick');
    this.removeBoardGame.emit(boardGame);
  }

}
