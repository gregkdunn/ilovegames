import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';
import {
  IBoardGameState,
  IRootState,
  IVideoGameState
} from '../../interfaces/state.interface';
import { boardGameReducer } from './board-game.reducer';
import { videoGameReducer } from './video-game.reducer';

export const rootReducer: ActionReducerMap<IRootState> = {
  boardGames: boardGameReducer,
  videoGames: videoGameReducer
};

export const metaReducers: Array<
  MetaReducer<IRootState>
> = environment.production ? [storeFreeze] : [];

export const getRootStoreBoardGamesState = createFeatureSelector<
  IRootState,
  IBoardGameState
>('boardGames');

export const getRootStoreVideoGamesState = createFeatureSelector<
  IRootState,
  IVideoGameState
>('videoGames');
