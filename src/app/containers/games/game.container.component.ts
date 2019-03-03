import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IBoardGame } from '../../interfaces/board-game.interface';
import { IRootState } from '../../interfaces/state.interface';
import {
  AddBoardGame,
  DeselectBoardGame,
  LoadBoardGames,
  RemoveBoardGame,
  SaveBoardGames,
  SelectBoardGame,
} from '../../store/actions/board-game.actions';
import { getBoardGames } from '../../store/selectors/board-game.selector';


@Component({
  selector: 'gkd-games',
  styles: ['game.container.component.css'],
  templateUrl: './game.container.component.html'
})
export class GameContainerComponent implements OnInit {
  public boardGames$: Observable<IBoardGame[]>;
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<IRootState>) {}

  public ngOnInit() {
    this.registerVariables();
    this.loadBoardGames();

    // log to test
    this.logBoardGames();
  }

  public logBoardGames() {
    this.boardGames$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((data: IBoardGame[]) => {
      console.log('boardGames$', data);
    });
  }

  public registerVariables(): void {
    // Use a selector to get data - store.select
    this.boardGames$ = this.store.select(getBoardGames);
  }

  public addBoardGame(boardGame: IBoardGame): void {
    // Use actions to update data - store.dispatch
    this.store.dispatch(new AddBoardGame(boardGame));
  }

  public removeBoardGame(boardGame: IBoardGame): void {
    this.store.dispatch(new RemoveBoardGame(boardGame));
  }

  public selectBoardGame(boardGame: IBoardGame): void {
    this.store.dispatch(new SelectBoardGame(boardGame));
  }

  public deselectBoardGame(boardGame: IBoardGame): void {
    this.store.dispatch(new DeselectBoardGame(boardGame));
  }

  public loadBoardGames(): void {
    this.store.dispatch(new LoadBoardGames());
  }

  public saveBoardGame(boardGames: IBoardGame[]): void {
    this.store.dispatch(new SaveBoardGames(boardGames));
  }

}
