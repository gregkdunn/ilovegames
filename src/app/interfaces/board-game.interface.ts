export interface  IBoardGame {
  description: string;
  id:          string;
  image:       string;
  link:        string;
  name:        string;
  playerMax:   number;
  playerMin:   number;
  rating:      number;
};

export interface IBoardGameEntity {
  [name: string]: IBoardGame;
};