import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import { of } from 'rxjs';

import {
  mockBoardGame,
  mockBoardGameArray2
} from '../../../mocks/board-game.mock';
import { BoardGameListItemComponent } from '../board-game-list-item/board-game-list-item.component';
import { BoardGamesListComponent } from './board-games-list.component';

describe('BoardGamesListComponent', () => {
  let component: BoardGamesListComponent;
  let fixture: ComponentFixture<BoardGamesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardGamesListComponent, BoardGameListItemComponent],
      imports: [MatBadgeModule, MatButtonModule, MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGamesListComponent);
    component = fixture.componentInstance;
    component.boardGames$ = of(mockBoardGameArray2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the output when notified', () => {
    spyOn(component.removeBoardGame, 'emit').and.callThrough();
    component.handleRemoveClick(mockBoardGame);
    expect(component.removeBoardGame.emit).toHaveBeenCalledWith(mockBoardGame);
  });
});
