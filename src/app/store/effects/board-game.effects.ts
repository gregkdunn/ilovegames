import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { IBoardGame } from '../../interfaces/board-game.interface';
import { ApiServiceMock } from '../../mocks/api.service.mock';
import {
  BoardGameAction,
  LOAD_BOARDGAMES,
  LoadBoardGamesError,
  LoadBoardGamesSuccess,
  SAVE_BOARDGAMES,
  SaveBoardGames,
  SaveBoardGamesError,
  SaveBoardGamesSuccess,
} from '../actions/board-game.actions';

// import { ApiService } from '../../services/api.service';

@Injectable()
export class BoardGameEffects {
  constructor(
    private actions$: Actions<BoardGameAction>,
    private apiService: ApiServiceMock
  ) {}

  @Effect()
  loadBoardGames$ = this.actions$.pipe(
    ofType(LOAD_BOARDGAMES),
    switchMap(() => {
      return this.apiService
        .loadBoardGames()
        .pipe(
          map(loadedBoardGames => new LoadBoardGamesSuccess(loadedBoardGames)),
          catchError(error => of(new LoadBoardGamesError(error)))
        );
    })
  );

  @Effect()
  saveBoardGame$ = this.actions$.pipe(
    ofType(SAVE_BOARDGAMES),
    map((action: SaveBoardGames) => action.payload),
    switchMap((boardGames: IBoardGame[]) => {
      return this.apiService
        .saveBoardGames(boardGames)
        .pipe(
          map(savedBoardGames => new SaveBoardGamesSuccess(savedBoardGames)),
          catchError(error => of(new SaveBoardGamesError(error)))
        );
    })
  );
}
