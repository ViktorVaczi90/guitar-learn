import actionTypes from '../constants/actionTypes';

export default dispatch => data =>
  dispatch({ type: actionTypes.ADD_DEFAULTS, data });
