import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint no-underscore-dangle: 0 */
  rootReducer, composeWithDevTools(applyMiddleware(thunk)),  
);

if (window.Cypress) {
  window.store = store;
}

export default store;
