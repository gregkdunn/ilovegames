import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IBoardGame } from '../../../interfaces/board-game.interface';

@Component({
  selector: 'gkd-board-game-list-item',
  styleUrls: ['./board-game-list-item.component.css'],
  templateUrl: './board-game-list-item.component.html'
})
export class BoardGameListItemComponent {
  @Input() public boardGame:IBoardGame;
  @Output() public removeBoardGame: EventEmitter<IBoardGame> = new EventEmitter();

  public handleRemoveClick(event: MouseEvent): boolean {
    // console.log('BoardGameListItemComponent.handleRemoveClick');
    this.removeBoardGame.emit(this.boardGame);
    return false;
  }
}
