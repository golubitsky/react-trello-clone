export const REQUEST_BOARDS = 'REQUEST_BOARDS';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';

export const requestBoards = () => ({
  type: REQUEST_BOARDS
});

export const receiveBoards = json => console.log(json) || ({
  type: RECEIVE_BOARDS,
  boards: json,
  receivedAt: Date.now()
});

export const fetchBoards = () => (dispatch) => {
  dispatch(requestBoards());
  return fetch('http://localhost:3001/boards')
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveBoards(json));
    });
};
