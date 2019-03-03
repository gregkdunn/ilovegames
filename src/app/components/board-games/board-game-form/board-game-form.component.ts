import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { IBoardGame } from '../../../interfaces/board-game.interface';
import { BoardGameModel } from '../../../models/board-game.model';

@Component({
  selector: 'gkd-board-game-form',
  styleUrls: ['./board-game-form.component.css'],
  templateUrl: './board-game-form.component.html'
})
export class BoardGameFormComponent implements OnInit {
  @Input() public boardGame: IBoardGame;
  @Output() public addBoardGame: EventEmitter<IBoardGame> = new EventEmitter();
  public boardGameModel: BoardGameModel;
  public boardGameForm: FormGroup;

  public ngOnInit(): void {
    this.boardGameModel = new BoardGameModel();
    this.boardGameForm = this.createFormGroup();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.hasOwnProperty('boardGame') &&
      changes.boardGame.currentValue !== changes.boardGame.previousValue
    ) {
      this.initBoardGameValues();
    }
  }

  public createFormGroup(): FormGroup {
    return new FormGroup({
      boardGameName: new FormControl(),
      boardGameDescription: new FormControl(),
      boardGameImage: new FormControl(),
      boardGameRating: new FormControl()
    });
  }

  public initBoardGameValues() {
    if (this.boardGame) {
      this.boardGameModel.deserialize(this.boardGame);
    } else {
      this.boardGameModel.reset();
    }
  }

  public setBoardGameValues() {
    const formData: any = { ...this.boardGameForm.value };
    console.log('formData', formData);

    this.boardGameModel.name = formData.boardGameName;
    this.boardGameModel.description = formData.boardGameDescription;
    this.boardGameModel.image = formData.boardGameImage;
    this.boardGameModel.rating = formData.boardGameRating;
  }

  public handleAddClick(event: MouseEvent): boolean {
    this.setBoardGameValues();

    // console.log('this.boardGame', this.boardGame);
    // console.log('board-game-form.handleAddClick');
    this.addBoardGame.emit(this.boardGameModel.toJSON());
    this.resetForm();
    return false;
  }

  public resetForm() {
    this.boardGameForm.reset();
    this.boardGameModel.reset();
  }
}
