import rootReducer from './../../src/reducers/index';
import currentUserReducer from '../../src/reducers/currentUserReducer';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from '../../src/middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      currentUser: {}
    });
  });

  test('Should contain currentUserReducer logic', () => {
    expect(store.getState().currentUser).toEqual(currentUserReducer(undefined, { type: null }));
  });

});