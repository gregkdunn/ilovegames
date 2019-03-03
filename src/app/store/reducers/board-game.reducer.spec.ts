import { IBoardGame } from '../../interfaces/board-game.interface';
import {
  mockBoardGame2,
  mockBoardGame3,
  mockBoardGameArray,
  mockBoardGameArray2,
  mockBoardGameArray3,
  mockBoardGameArrayEntities,
  mockBoardGameArrayEntities2,
  mockBoardGameArrayEntities3
} from '../../mocks/board-game.mock';
import {
  AddBoardGame,
  DeselectBoardGame,
  LoadBoardGames,
  LoadBoardGamesError,
  LoadBoardGamesSuccess,
  RemoveBoardGame,
  SaveBoardGames,
  SaveBoardGamesSuccess,
  SelectBoardGame
} from '../actions/board-game.actions';
import {
  boardGameReducer,
  getBoardGamesStoreAll,
  getBoardGamesStoreLoaded,
  getBoardGamesStoreLoading,
  getBoardGamesStoreSelected,
  getBoardGamesStoreSubmitted,
  getBoardGamesStoreUpdating,
  initialState
} from '../reducers/board-game.reducer';

describe('BoardGameReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const state = boardGameReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('ADD_BOARDGAME action', () => {
    it('should add a boardGame to the boardGame store', () => {
      const previousEntities = mockBoardGameArrayEntities;
      const previousState = {
        ...initialState,
        loading: true,
        entities: previousEntities,
        ids: ['Azul', 'Ticket to Ride']
      };
      const boardGame: IBoardGame = mockBoardGame3;

      const action = new AddBoardGame(boardGame);
      const state = boardGameReducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(3);
      expect(state.entities).toEqual({ ...previousEntities, Catan: boardGame });
      expect(state.ids).toEqual(['Azul', 'Ticket to Ride', 'Catan']);
    });
  });

  describe('LOAD_BOARDGAMES action', () => {
    it('should set loading to true', () => {
      const action = new LoadBoardGames();
      const state = boardGameReducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });

  describe('LOAD_BOARDGAMES_SUCCESS action', () => {
    it('should populate the boardGame store', () => {
      const boardGames: IBoardGame[] = mockBoardGameArray2;

      const entities = mockBoardGameArrayEntities2;
      const action = new LoadBoardGamesSuccess(boardGames);
      const state = boardGameReducer(initialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(entities);
    });
  });

  describe('LOAD_BOARDGAMES_FAIL action', () => {
    it('should return the initial state', () => {
      const action = new LoadBoardGamesError({});
      const state = boardGameReducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const previousState = { ...initialState, loading: true };
      const action = new LoadBoardGamesError({});
      const state = boardGameReducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('REMOVE_BOARDGAME action', () => {
    it('should remove a boardGame from the boardGame store', () => {
      const boardGames: IBoardGame[] = mockBoardGameArray2; /* ? */

      const previousEntities = mockBoardGameArrayEntities2;
      const previousState = {
        ...initialState,
        loaded: true,
        entities: previousEntities,
        ids: ['Azul', 'Ticket to Ride', 'Catan']
      };
      const action = new RemoveBoardGame(boardGames[0]); /* boardGames[0] */
      console.log('boardGames[0]', boardGames[0]);

      const state = boardGameReducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(2);
      expect(state.entities).toEqual(mockBoardGameArrayEntities3);
      expect(state.ids).toEqual(['Ticket to Ride', 'Catan']);
    });
  });

  describe('SELECT_BOARDGAME action', () => {
    it('should add a boardGame to the selected array from boardGame store', () => {
      const boardGames: IBoardGame[] = mockBoardGameArray2;
      const previousEntities = mockBoardGameArrayEntities2;
      const previousState = {
        ...initialState,
        loading: true,
        entities: previousEntities,
        ids: ['Azul', 'Ticket to Ride', 'Catan'],
        selected: ['Azul']
      };
      const action = new SelectBoardGame(boardGames[2]);
      const state = boardGameReducer(previousState, action);

      expect(state.selected.length).toEqual(2);
      expect(state.selected).toEqual(['Azul', 'Catan']);
    });
  });

  describe('DESELECT_BOARDGAME action', () => {
    it('should remove a boardGame from the selected array', () => {
      const boardGames: IBoardGame[] = mockBoardGameArray2;
      const previousEntities = mockBoardGameArrayEntities2;
      const previousState = {
        ...initialState,
        loading: true,
        entities: previousEntities,
        ids: ['Azul', 'Ticket to Ride', 'Catan'],
        selected: ['Azul']
      };
      const action = new DeselectBoardGame(boardGames[0]);
      const state = boardGameReducer(previousState, action);

      expect(state.selected.length).toEqual(0);
      expect(state.selected).toEqual([]);
    });
  });

  describe('SAVE_BOARDGAMES action', () => {
    it('should set updating to true', () => {
      const boardGames: IBoardGame[] = mockBoardGameArray3;
      const previousEntities = mockBoardGameArrayEntities2;
      const previousState = {
        ...initialState,
        loaded: true,
        entities: previousEntities,
        ids: ['Azul', 'Ticket to Ride', 'Catan'],
        selected: ['Ticket to Ride']
      };
      const action = new SaveBoardGames(boardGames);
      const state = boardGameReducer(previousState, action);

      expect(state.updating).toEqual(true);
    });
  });

  describe('SAVE_BOARDGAMES_FAIL action', () => {
    it('should return the initial state', () => {
      const action = new LoadBoardGamesError({});
      const state = boardGameReducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const previousState = { ...initialState, loading: true };
      const action = new LoadBoardGamesError({});
      const state = boardGameReducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('SAVE_BOARDGAME_SUCCESS action', () => {
    it('should add a boardGame to the submitted array from the boardGame array', () => {
      const boardGames: IBoardGame[] = mockBoardGameArray2;
      const previousEntities = mockBoardGameArrayEntities2;
      const previousState = {
        ...initialState,
        loading: true,
        entities: previousEntities,
        ids: ['Azul', 'Ticket to Ride', 'Catan'],
        selected: ['Ticket to Ride']
      };
      const action = new SaveBoardGamesSuccess([mockBoardGame2]);
      const state = boardGameReducer(previousState, action);

      expect(state.selected.length).toEqual(0);
      expect(state.selected).toEqual([]);

      expect(state.submitted.length).toEqual(1);
      expect(state.submitted).toEqual(['Ticket to Ride']);
    });
  });

  describe('BoardGameReducer Store Methods', () => {
    let boardGames: IBoardGame[];
    let entities: { [key: string]: IBoardGame };
    let previousState;

    beforeEach(() => {
      boardGames = mockBoardGameArray2;
      entities = mockBoardGameArrayEntities2;
      previousState = {
        ...initialState,
        entities,
        ids: ['Azul', 'Ticket to Ride', 'Catan'],
        selected: ['Ticket to Ride'],
        submitted: ['Catan']
      };
    });

    describe('getBoardGameStoreAll', () => {
      it('should return all entities', () => {
        const all = getBoardGamesStoreAll(previousState);
        expect(all).toEqual(boardGames);
      });
    });

    describe('getBoardGameStoreSelected', () => {
      it('should return selected entities', () => {
        const selected = getBoardGamesStoreSelected(previousState);
        expect(selected).toEqual([boardGames[1]]);
      });
    });

    describe('getBoardGameStoreSubmitted', () => {
      it('should return submitted entities', () => {
        const submitted = getBoardGamesStoreSubmitted(previousState);
        expect(submitted).toEqual([boardGames[2]]);
      });
    });

    describe('getBoardGameStoreLoading', () => {
      it('should return loading', () => {
        const newState = { ...initialState, loading: true };
        const loading = getBoardGamesStoreLoading(newState);
        expect(loading).toEqual(true);
      });
    });

    describe('getBoardGameStoreLoaded', () => {
      it('should return loaded', () => {
        const newState = { ...initialState, loaded: true };
        const loaded = getBoardGamesStoreLoaded(newState);
        expect(loaded).toEqual(true);
      });
    });

    describe('getBoardGameStoreUpdating', () => {
      it('should return updating', () => {
        const newState = { ...initialState, updating: true };
        const updating = getBoardGamesStoreUpdating(newState);
        expect(updating).toEqual(true);
      });
    });
  });
});
