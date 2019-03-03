import { IBoardGameEntity } from './board-game.interface';
import { IVideoGameInterface } from './video-game.interface';

export interface IRootState {
  boardGames: IBoardGameState;
  videoGames: IVideoGameState;
}

export interface IBoardGameState {
  entities: IBoardGameEntity;
  ids: string[];
  loaded: boolean;
  loading: boolean;
  selected: string[];
  submitted: string[];
  updating: boolean;
}

// DO NOT USE
export interface IVideoGameState {
  games: IVideoGameInterface[];
  loaded: boolean;
  loading: boolean;
  selected: string[];
  submitted: string[];
  updating: boolean;
}


