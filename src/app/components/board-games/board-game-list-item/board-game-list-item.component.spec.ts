import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import { mockBoardGame } from '../../../mocks/board-game.mock';
import { BoardGameListItemComponent } from './board-game-list-item.component';

describe('BoardGameListItemComponent', () => {
  let component: BoardGameListItemComponent;
  let fixture: ComponentFixture<BoardGameListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardGameListItemComponent],
      imports: [MatBadgeModule, MatButtonModule, MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGameListItemComponent);
    component = fixture.componentInstance;
    component.boardGame = mockBoardGame;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the output on click', () => {
    spyOn(component.removeBoardGame, 'emit').and.callThrough();
    component.handleRemoveClick(new MouseEvent('click'));
    expect(component.removeBoardGame.emit).toHaveBeenCalledWith(mockBoardGame);
  });
});
