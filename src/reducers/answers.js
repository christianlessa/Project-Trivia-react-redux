import { GET_ANSWERS } from '../actions';

const INITIAL_STATE = {

};

const answers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_ANSWERS:
    return action.payload;
  default:
    return state;
  }
};

export default answers;
