import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IBoardGame } from '../interfaces/board-game.interface';
import { mockBoardGameArray } from './board-game.mock';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceMock {
  constructor(private _http: HttpClient) { }

  loadBoardGames(): Observable<IBoardGame[]> {
    return of(mockBoardGameArray);
  }

  saveBoardGames(boardGames: IBoardGame[]): Observable<IBoardGame[]> {
    return of(boardGames);
  }
}
