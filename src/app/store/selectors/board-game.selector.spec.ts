import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { IBoardGame } from '../../interfaces/board-game.interface';
import { IBoardGameState } from '../../interfaces/state.interface';
import {
  mockBoardGameArray2,
  mockBoardGameArrayEntities2
} from '../../mocks/board-game.mock';
import {
  LoadBoardGamesSuccess
} from '../actions/board-game.actions';
import { initialState } from '../reducers/board-game.reducer';
import { rootReducer } from '../reducers/root.reducer';
import { getBoardGames, getBoardGamesState } from './board-game.selector';

describe('BoardGame Selectors', () => {
  let store: Store<IBoardGameState>;
  const boardGames: IBoardGame[] = mockBoardGameArray2;
  const entities = mockBoardGameArrayEntities2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(rootReducer)]
    });

    store = TestBed.get(Store);
  });

  describe('getBoardGamesState', () => {
    it('should return state of boardGame store slice', () => {
      let result: IBoardGameState;

      store.select(getBoardGamesState).subscribe(value => (result = value));

      store.dispatch(new LoadBoardGamesSuccess(boardGames));

      const newState = {
        ...initialState,
        entities,
        ids: ['Azul', 'Ticket to Ride', 'Catan'],
        loaded: true,
        loading: false
      };

      console.log(result);
      console.log(newState);

      expect(result).toEqual(newState);
    });
  });

  describe('getBoardGames', () => {
    it('should return an array of board games', () => {
      let result;

      store.select(getBoardGames).subscribe(value => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new LoadBoardGamesSuccess(boardGames));

      expect(result).toEqual(mockBoardGameArray2);
    });
  });
});
