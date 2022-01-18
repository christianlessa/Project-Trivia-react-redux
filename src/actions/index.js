const RECEIVE_TOKENS = 'RECEIVE_TOKENS';
export const GET_ANSWERS = 'GET_ANSWERS';

export const receiveMovies = (token) => ({
  type: RECEIVE_TOKENS,
  token,
});

export const getAnswers = (answers) => ({
  type: GET_ANSWERS,
  payload: answers,
});

export function fetchToken() {
  return (dispatch) => fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((token) => dispatch(receiveMovies(token)));
}

export const fetchAnswers = () => (dispatch) => {
  const token = localStorage.getItem('token');
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json())
    .then((dates) => dispatch(getAnswers(dates)));
};

export const PLAYER_LOGIN = 'PLAYER_LOGIN';

export const playerLogin = (name, hash) => ({ type: PLAYER_LOGIN, name, hash });

export const somar = (score) => ({ type: 'PLAYER_SOMAR', score });
