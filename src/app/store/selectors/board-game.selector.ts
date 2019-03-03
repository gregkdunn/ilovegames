import { createSelector } from '@ngrx/store';

import { getBoardGamesStoreAll, getBoardGamesStoreLoaded } from '../reducers/board-game.reducer';
import { getRootStoreBoardGamesState } from '../reducers/root.reducer';

export const getBoardGamesState = createSelector(
  getRootStoreBoardGamesState
);

export const getBoardGames = createSelector(
  getRootStoreBoardGamesState,
  getBoardGamesStoreAll
);

export const getBoardGamesLoaded = createSelector(
  getRootStoreBoardGamesState,
  getBoardGamesStoreLoaded
);
