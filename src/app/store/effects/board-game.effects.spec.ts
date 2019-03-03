import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { empty, Observable, of } from 'rxjs';

import { IBoardGame } from '../../interfaces/board-game.interface';
import { ApiServiceMock } from '../../mocks/api.service.mock';
import { mockBoardGameArray, mockBoardGameArray2 } from '../../mocks/board-game.mock';
import { LoadBoardGames, LoadBoardGamesSuccess, SaveBoardGames, SaveBoardGamesSuccess } from '../actions/board-game.actions';
import { BoardGameEffects } from './board-game.effects';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('BoardGameEffects', () => {
  let actions$: TestActions;
  let service: ApiServiceMock;
  let effects: BoardGameEffects;

  const boardGames: IBoardGame[] = mockBoardGameArray;
  const moreBoardGames: IBoardGame[] = mockBoardGameArray2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiServiceMock,
        BoardGameEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(ApiServiceMock);
    effects = TestBed.get(BoardGameEffects);

    spyOn(service, 'loadBoardGames').and.returnValue(of(boardGames));
    spyOn(service, 'saveBoardGames').and.returnValue(of(moreBoardGames));
  });

  describe('loadBoardGames$', () => {
    it('should work', () => {
      const action = new LoadBoardGames();
      const completion = new LoadBoardGamesSuccess(boardGames);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.loadBoardGames$).toBeObservable(expected);
    });
  });

  describe('saveBoardGames$', () => {
    it('should work', () => {
      const action = new SaveBoardGames(moreBoardGames);
      const completion = new SaveBoardGamesSuccess(moreBoardGames);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.saveBoardGame$).toBeObservable(expected);
    });
  });

});
