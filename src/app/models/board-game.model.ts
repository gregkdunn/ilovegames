import { IBoardGame } from '../interfaces/board-game.interface';

export class BoardGameModel {
  public id:          string;
  //
  public description: string;
  public image:       string;
  public link:        string;
  public name:        string;
  public playerMin:   number;
  public playerMax:   number;
  public rating:      number;


  public toJSON(): IBoardGame {
    return this.serialize();
  }

  public serialize(): IBoardGame {
    return Object.assign({}, this);
  }

  public deserialize(input: IBoardGame) {
    Object.assign(this, input);
    
    return this;
  }

  public reset() {
    this.deserialize({
      description: null,
      id: null,
      image: null,
      link: null,
      name: null,
      playerMax: null,
      playerMin: null,
      rating: null
    });

    return this;
  }
}
