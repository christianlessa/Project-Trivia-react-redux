// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {

};

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'RECEIVE_TOKENS':
    localStorage.setItem('token', action.token.token);
    console.log(localStorage.getItem('token'));
    return action.token.token;
  default:
    return state;
  }
};

export default token;
