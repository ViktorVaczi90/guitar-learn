import actionTypes from '../constants/actionTypes';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DEFAULTS:
      return action.data;
    default:
      return state;
  }
};
