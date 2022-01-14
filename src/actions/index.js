// Coloque aqui suas actions
export const newAction = (state) => ({ type: 'NEW_ACTION', state });

export const newAction2 = (state) => ({ type: 'NEW_ACTION2', state });
//export const newAction3 = (state) => ({ type: 'NEW_ACTION3', state });

const REQUEST_TOKENS = 'REQUEST_TOKENS';
const RECEIVE_TOKENS = 'RECEIVE_TOKENS';

const requestMovies = () => ({
    type: REQUEST_TOKENS});

const receiveMovies = (token) => ({
    type: RECEIVE_TOKENS,
    token
    });

export function fetchMovies() {
    return (dispatch) => { // thunk declarado
      dispatch(requestMovies());
      return fetch('https://opentdb.com/api_token.php?command=request')
        .then((response) => response.json())
        .then((token) => dispatch(receiveMovies(token)));
    };
  }
  