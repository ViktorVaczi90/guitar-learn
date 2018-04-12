// @flow

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './reducers';

const baseMiddleware = [];
const middleware = [...baseMiddleware];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(...middleware)),
);

// eslint-disable-next-line no-unused-vars
const sampleState = {
  excersizeState: '',
  currentMusic: {
    notes: ['C2', 'E3', 'A2'],
    currentNote: 1,
  },
  instrument: {
    type: 'guitar',
    guitarParameters: {
      strings: ['E2', 'A2', 'D3', 'G3', 'H3', 'E4'],
    },
    pianoParameters: {},
  },
  excersizeSettings: {
    startFret: 5,
    notes: [],
  },
  user: {},
  settings: {},
  defaults: {
    excersizeSettings: {},
  },
};
