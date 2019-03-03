import {
  IBoardGame,
  IBoardGameEntity
} from '../../interfaces/board-game.interface';
import { IBoardGameState } from '../../interfaces/state.interface';
import {
  ADD_BOARDGAME,
  BoardGameAction,
  DESELECT_BOARDGAME,
  LOAD_BOARDGAMES,
  LOAD_BOARDGAMES_ERROR,
  LOAD_BOARDGAMES_SUCCESS,
  REMOVE_BOARDGAME,
  RESET_BOARDGAMES,
  SAVE_BOARDGAMES,
  SAVE_BOARDGAMES_ERROR,
  SAVE_BOARDGAMES_SUCCESS,
  SELECT_BOARDGAME
} from '../actions/board-game.actions';

export const initialState: IBoardGameState = {
  entities: {},
  ids: [],
  selected: [],
  submitted: [],
  loaded: false,
  loading: false,
  updating: false
};

export function boardGameReducer(
  state = initialState,
  action: BoardGameAction
): IBoardGameState {
  switch (action.type) {
    case ADD_BOARDGAME: {
      // Add single item to object
      const boardGame: IBoardGame = action.payload;
      const entities: IBoardGameEntity = {
        ...state.entities,
        [boardGame.name]: boardGame
      };

      return {
        ...state,
        entities,
        ids: [...state.ids, boardGame.name],
        loading: false
      };
    }

    case LOAD_BOARDGAMES: {
      return {
        ...state,
        loading: true
      };
    }

    case LOAD_BOARDGAMES_SUCCESS: {
      // Add multiple items to object
      const boardGames: IBoardGame[] = action.payload;
      let ids: string[] = [];
      const entities: IBoardGameEntity = boardGames.reduce(
        (
          processedEntities: { [name: string]: IBoardGame },
          boardGame: IBoardGame
        ) => {
          ids = [...ids, boardGame.name];
          return {
            ...processedEntities,
            [boardGame.name]: boardGame
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        entities,
        ids,
        loading: false,
        loaded: true
      };
    }

    case LOAD_BOARDGAMES_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case REMOVE_BOARDGAME: {
      // Remove item from object
      const boardGame: IBoardGame = action.payload;
      const {
        [boardGame.name]: removed,
        ...entitiesLeft
      }: IBoardGameEntity = state.entities;

      return {
        ...state,
        entities: entitiesLeft,
        ids: state.ids.filter(id => id !== boardGame.name),
        selected: state.selected.filter(id => id !== boardGame.name),
        submitted: state.selected.filter(id => id !== boardGame.name),
        loading: false
      };
    }

    case RESET_BOARDGAMES: {
      return initialState;
    }

    case SELECT_BOARDGAME: {
      // Add item to Array
      return {
        ...state,
        selected: [...state.selected, action.payload.name]
      };
    }

    case DESELECT_BOARDGAME: {
      // Remove item from Array
      return {
        ...state,
        selected: state.selected.filter(id => id !== action.payload.name)
      };
    }

    case SAVE_BOARDGAMES: {
      return {
        ...state,
        updating: true
      };
    }

    case SAVE_BOARDGAMES_SUCCESS: {
      // Add multiple items to object
      const ids: string[] = action.payload.map(boardGame => boardGame.name);

      return {
        ...state,
        selected: [],
        submitted: [...state.submitted, ...ids],
        updating: false
      };
    }

    case SAVE_BOARDGAMES_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    default:
      return state;
  }
}

// Store Helper Functions
export const getBoardGamesStoreAll = (state: IBoardGameState): IBoardGame[] =>
  state.ids.map(id => state.entities[id]);

export const getBoardGamesStoreSelected = (
  state: IBoardGameState
): IBoardGame[] => state.selected.map(id => state.entities[id]);

export const getBoardGamesStoreSubmitted = (
  state: IBoardGameState
): IBoardGame[] => state.submitted.map(id => state.entities[id]);

export const getBoardGamesStoreLoaded = (state: IBoardGameState): boolean =>
  state.loaded;

export const getBoardGamesStoreLoading = (state: IBoardGameState): boolean =>
  state.loading;

export const getBoardGamesStoreUpdating = (state: IBoardGameState): boolean =>
  state.updating;
