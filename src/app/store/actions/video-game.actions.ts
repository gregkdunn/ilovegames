import { Action } from '@ngrx/store';

/* tslint:disable:max-classes-per-file */

// *********************************************************
// Example of a bad action file
// DO NOT USE
// *********************************************************

// Actions
export const ADD_VIDEOGAME = 'Add VideoGame';
export const RESET_VIDEOGAME = 'Reset VideoGame';

export class AddVideoGame implements Action {
  public readonly type = 'add_videoGame';
  constructor(public payload: any) {}
}

export class ResetVideoGame implements Action {
  public readonly type = RESET_VIDEOGAME;
}

// Action types
// - Union Type of all possible actions
//

export type VideoGameAction = AddVideoGame | ResetVideoGame;
