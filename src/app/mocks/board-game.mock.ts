import { IBoardGame } from '../interfaces/board-game.interface';

export const mockBoardGame: IBoardGame = {
  description:
    'In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they have placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the players score. The player with the most points at the end of the game wins.',
  id: '1',
  image:
    'https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg',
  link: 'https://boardgamegeek.com/boardgame/230802/azul',
  name: 'Azul',
  playerMax: 4,
  playerMin: 2,
  rating: 9
};

export const mockBoardGame2: IBoardGame = {
  description:
    '"The rules are simple enough to write on a train ticket – each turn you either draw more cards, claim a route, or get additional Destination Tickets," says Ticket to Ride author, Alan R. Moon. "The tension comes from being forced to balance greed – adding more cards to your hand, and fear – losing a critical route to a competitor."',
  id: '2',
  image:
    'https://cf.geekdo-images.com/itemrep/img/-7kWI_TKVJ9M3DLFdPTfky18324=/fit-in/246x300/pic38668.jpg',
  link: 'https://boardgamegeek.com/boardgame/9209/ticket-ride',
  name: 'Ticket to Ride',
  playerMax: 5,
  playerMin: 2,
  rating: 8
};

export const mockBoardGame3: IBoardGame = {
  description:
    'A turn consists of possibly playing a development card, rolling the dice, everyone (perhaps) collecting resource cards based on the roll and position of houses (or upgraded cities—think: hotels) unless a 7 is rolled, turning in resource cards (if possible and desired) for improvements, trading cards at a port, and trading resource cards with other players. If a 7 is rolled, the active player moves the robber to a new hex tile and steals resource cards from other players who have built structures adjacent to that tile.',
  id: '3',
  image:
    'https://cf.geekdo-images.com/itemrep/img/aozRplCSOpRucLxSuClX2odEUBQ=/fit-in/246x300/pic2419375.jpg',
  link: 'https://boardgamegeek.com/boardgame/13/catan',
  name: 'Catan',
  playerMax: 5,
  playerMin: 3,
  rating: 7
};

export const mockBoardGameArray: IBoardGame[] = [mockBoardGame, mockBoardGame2];

export const mockBoardGameArray2: IBoardGame[] = [
  mockBoardGame,
  mockBoardGame2,
  mockBoardGame3
];

export const mockBoardGameArray3: IBoardGame[] = [
  mockBoardGame2,
  mockBoardGame3
];

export const mockBoardGameArrayEntities = {
  Azul: mockBoardGame,
  'Ticket to Ride': mockBoardGame2
};

export const mockBoardGameArrayEntities2 = {
  Azul: mockBoardGame,
  'Ticket to Ride': mockBoardGame2,
  Catan: mockBoardGame3
};

export const mockBoardGameArrayEntities3 = {
  'Ticket to Ride': mockBoardGame2,
  Catan: mockBoardGame3
};
