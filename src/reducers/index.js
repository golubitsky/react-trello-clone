import { REQUEST_BOARDS, RECEIVE_BOARDS } from '../actions';

const defaultState = {
  isFetching: false,
  boards: []
};

const boards = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_BOARDS:
      console.log('requesting');
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_BOARDS:
      console.log(action.boards);
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
