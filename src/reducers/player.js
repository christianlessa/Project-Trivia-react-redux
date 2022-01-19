import { PLAYER_LOGIN, GET_ASSERTIONS } from '../actions';

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
  case 'PLAYER_SOMAR':
    return ({
      ...state,
      score: state.score + action.score,
    });
  case GET_ASSERTIONS:
    return {
      ...state,
      assertions: action.payload,
    };
  default:
    return state;
  }
};

export default player;
