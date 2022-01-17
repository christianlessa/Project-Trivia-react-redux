import { PLAYER_LOGIN } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PLAYER_LOGIN:
    return ({
      ...state,
      name: action.name,
      gravatarEmail: action.hash,
    });
  default:
    return state;
  }
};

export default player;
