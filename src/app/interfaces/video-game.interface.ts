export interface  IVideoGameInterface {
  description: string;
  id:          string;
  image:       string;
  link:        string;
  name:        string;
  rating:      number;
  systems:     string[];
}

export interface IVideoGameEntity {
  [name: string]: IVideoGameInterface;
}
