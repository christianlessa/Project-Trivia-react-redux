const RECEIVE_TOKENS = 'RECEIVE_TOKENS';

export const receiveMovies = (token) => ({
  type: RECEIVE_TOKENS,
  token,
});

export function fetchMovies() {
  return (dispatch) => fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((token) => dispatch(receiveMovies(token)));
}
