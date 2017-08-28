import { combineReducers } from 'redux';
import { REQUEST_BOARDS, RECEIVE_BOARDS } from '../actions';

const defaultState = {
  isFetching: false,
  boards: []
};

const boards = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_BOARDS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_BOARDS:
      return {
        ...state,
        isFetching: false,
        boards: action.boards,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

export default boards;
