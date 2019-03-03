import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IBoardGame } from '../interfaces/board-game.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http: HttpClient) { }

  loadBoardGames(): IBoardGame[] {
    return null;
  }

  saveBoardGames(boardGames: IBoardGame[]): IBoardGame[] {
    return null;
  }
}
