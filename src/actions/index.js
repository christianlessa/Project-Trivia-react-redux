// Coloque aqui suas actions
export const newAction = (state) => ({ type: 'NEW_ACTION', state });

export const newAction2 = (state) => ({ type: 'NEW_ACTION2', state });
//export const newAction3 = (state) => ({ type: 'NEW_ACTION3', state });

const REQUEST_MOVIES = 'REQUEST_MOVIES';
const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

const requestMovies = () => ({
    type: REQUEST_MOVIES});

const receiveMovies = (ss,exchangeRates) => ({
    type: RECEIVE_MOVIES,
    ss,
    exchangeRates});

export function fetchMovies(ss) {
    return (dispatch) => { // thunk declarado
      dispatch(requestMovies());
      return fetch('https://opentdb.com/api_token.php?command=request')
        .then((response) => response.json())
        .then((exchangeRates) => dispatch(receiveMovies(ss,exchangeRates)));
    };
  }
  const requestMovies2 = () => ({
    type: REQUEST_MOVIES});

  const receiveMovies2 = (currencies) => ({
    type: 'RECEIVE_MOVIES2',
    currencies
    });

export function fetchMovies2() {
    return (dispatch) => { // thunk declarado
      dispatch(requestMovies2());
      return fetch('https://economia.awesomeapi.com.br/json/all')
        .then((response) => response.json())
        .then((exchangeRates) => dispatch(receiveMovies2(exchangeRates)));
    };
  }
