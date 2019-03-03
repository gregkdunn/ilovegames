import { IBoardGame } from '../../interfaces/board-game.interface';
import {
  mockBoardGame,
  mockBoardGame2,
  mockBoardGame3,
  mockBoardGameArray,
  mockBoardGameArray2,
} from '../../mocks/board-game.mock';
import {
  ADD_BOARDGAME,
  AddBoardGame,
  DESELECT_BOARDGAME,
  DeselectBoardGame,
  LOAD_BOARDGAMES,
  LOAD_BOARDGAMES_ERROR,
  LOAD_BOARDGAMES_SUCCESS,
  LoadBoardGames,
  LoadBoardGamesError,
  LoadBoardGamesSuccess,
  REMOVE_BOARDGAME,
  RemoveBoardGame,
  SAVE_BOARDGAMES,
  SAVE_BOARDGAMES_ERROR,
  SAVE_BOARDGAMES_SUCCESS,
  SaveBoardGames,
  SaveBoardGamesError,
  SaveBoardGamesSuccess,
  SELECT_BOARDGAME,
  SelectBoardGame,
} from '../actions/board-game.actions';

describe('BoardGames Actions', () => {

    describe('AddBoardGame', () => {
      it('should create an action', () => {
        const payload: IBoardGame = mockBoardGame;
        const action = new AddBoardGame(payload);

        expect({ ...action }).toEqual({
          type: ADD_BOARDGAME,
          payload
        });
      });
    });

    describe('RemoveBoardGame Actions', () => {
      describe('RemoveBoardGame', () => {
        it('should create an action', () => {
          const payload: IBoardGame = mockBoardGame3;
          const action = new RemoveBoardGame(payload);

          expect({ ...action }).toEqual({
            type: REMOVE_BOARDGAME,
            payload
          });
        });
      });
    });

    describe('SelectBoardGame Actions', () => {
      describe('DeselectBoardGame', () => {
        it('should create an action', () => {
          const payload: IBoardGame = mockBoardGame;
          const action = new DeselectBoardGame(payload);

          expect({ ...action }).toEqual({
            type: DESELECT_BOARDGAME,
            payload
          });
        });
      });

      describe('SelectBoardGame', () => {
        it('should create an action', () => {
          const payload: IBoardGame = mockBoardGame2;
          const action = new SelectBoardGame(payload);

          expect({ ...action }).toEqual({
            type: SELECT_BOARDGAME,
            payload
          });
        });
      });
    });

    describe('LoadBoardGames Actions', () => {
      describe('LoadBoardGames', () => {
        it('should create an action', () => {
          const action = new LoadBoardGames();

          expect({ ...action }).toEqual({
            type: LOAD_BOARDGAMES,
          });
        });
      });

      describe('LoadBoardGames Error', () => {
        it('should create an action', () => {
          const payload = { message: 'Load Error' };
          const action = new LoadBoardGamesError(payload);

          expect({ ...action }).toEqual({
            type: LOAD_BOARDGAMES_ERROR,
            payload
          });
        });
      });

      describe('LoadBoardGames Success', () => {
        it('should create an action', () => {
          const payload: IBoardGame[] = mockBoardGameArray;
          const action = new LoadBoardGamesSuccess(payload);

          expect({ ...action }).toEqual({
            type: LOAD_BOARDGAMES_SUCCESS,
            payload
          });
        });
      });
    });



  describe('SaveBoardGame Actions', () => {
    describe('SaveBoardGame', () => {
      it('should create an action', () => {
        const payload: IBoardGame[] = mockBoardGameArray2;
        const action = new SaveBoardGames(payload);

        expect({ ...action }).toEqual({
          type: SAVE_BOARDGAMES,
          payload
        });
      });
    });

    describe('SaveBoardGame Error', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new SaveBoardGamesError(payload);

        expect({ ...action }).toEqual({
          type: SAVE_BOARDGAMES_ERROR,
          payload
        });
      });
    });

    describe('SaveBoardGame Success', () => {
      it('should create an action', () => {
        const payload: IBoardGame[] = mockBoardGameArray2;
        const action = new SaveBoardGamesSuccess(payload);

        expect({ ...action }).toEqual({
          type: SAVE_BOARDGAMES_SUCCESS,
          payload
        });
      });
    });
  });
});
