import { Action } from '@ngrx/store';

import { Reset } from '@ngrx/store-devtools/src/actions';
import { IBoardGame } from '../../interfaces/board-game.interface';

/* tslint:disable:classes-per-file */

// Actions
export const ADD_BOARDGAME = '[Games] Add BoardGame';
export const DESELECT_BOARDGAME = '[Games] Deselect BoardGame';
export const REMOVE_BOARDGAME = '[Games] Remove BoardGame';
export const RESET_BOARDGAMES = '[Games] Reset BoardGame';
export const SELECT_BOARDGAME = '[Games] Select BoardGame';
// Actions with Effects
export const LOAD_BOARDGAMES = '[Games] Load BoardGames';
export const LOAD_BOARDGAMES_ERROR = '[Games] Load BoardGames Error';
export const LOAD_BOARDGAMES_SUCCESS = '[Games] Load BoardGames Success';
export const SAVE_BOARDGAMES = '[Games] Use BoardGame';
export const SAVE_BOARDGAMES_ERROR = '[Games] Use BoardGame Error';
export const SAVE_BOARDGAMES_SUCCESS = '[Games] Use BoardGame Success';

// Actions

export class AddBoardGame implements Action {
  public readonly type = ADD_BOARDGAME;
  constructor(public payload: IBoardGame) {}
}

export class DeselectBoardGame implements Action {
  public readonly type = DESELECT_BOARDGAME;
  constructor(public payload: IBoardGame) {}
}

export class RemoveBoardGame implements Action {
  public readonly type = REMOVE_BOARDGAME;
  constructor(public payload: IBoardGame) {}
}

export class ResetBoardGames implements Action {
  public readonly type = RESET_BOARDGAMES;
}

export class SelectBoardGame implements Action {
  public readonly type = SELECT_BOARDGAME;
  constructor(public payload: IBoardGame) {}
}

// Actions with Effects

export class LoadBoardGames implements Action {
  public readonly type = LOAD_BOARDGAMES;
}

export class LoadBoardGamesError implements Action {
  public readonly type = LOAD_BOARDGAMES_ERROR;
  constructor(public payload: any) {}
}

export class LoadBoardGamesSuccess implements Action {
  public readonly type = LOAD_BOARDGAMES_SUCCESS;
  constructor(public payload: IBoardGame[]) {}
}

export class SaveBoardGames implements Action {
  public readonly type = SAVE_BOARDGAMES;
  constructor(public payload: IBoardGame[]) {}
}

export class SaveBoardGamesError implements Action {
  public readonly type = SAVE_BOARDGAMES_ERROR;
  constructor(public payload: any) {}
}

export class SaveBoardGamesSuccess implements Action {
  public readonly type = SAVE_BOARDGAMES_SUCCESS;
  constructor(public payload: IBoardGame[]) {}
}

// Action types
// - Union Type of all possible actions
//

export type BoardGameAction =
  | AddBoardGame
  | DeselectBoardGame
  | RemoveBoardGame
  | ResetBoardGames
  | SelectBoardGame
  | LoadBoardGames
  | LoadBoardGamesError
  | LoadBoardGamesSuccess
  | SaveBoardGames
  | SaveBoardGamesError
  | SaveBoardGamesSuccess;
