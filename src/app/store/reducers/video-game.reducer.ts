import { IVideoGameState } from '../../interfaces/state.interface';
import { IVideoGameInterface } from '../../interfaces/video-game.interface';
import { RESET_VIDEOGAME, VideoGameAction } from '../actions/video-game.actions';

// *********************************************************
// Example of a bad reducer file
// DO NOT USE
// *********************************************************

export const initialState: IVideoGameState = {
  games: [],
  loaded: false,
  loading: false,
  selected: [],
  submitted: [],
  updating: false
};

export function videoGameReducer(state = initialState, action: VideoGameAction): IVideoGameState {

  switch (action.type) {
    case 'add_videoGame': {
      const videoGame: IVideoGameInterface = action.payload;
      // mutates state rather than creating new state
      state.games.push(videoGame);

      return state;
    }
    case RESET_VIDEOGAME: {
      // not pure function
      return initialState;
    }
    default:
      return state;
  }
}

