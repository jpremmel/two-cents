import rootReducer from './../../src/reducers/index';
import { createStore } from 'redux';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({

    });
  });

  

});