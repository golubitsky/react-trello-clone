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
  return fetch('http://api:3001/boards', {
    accept: 'application/json'
  })
    .then(response => console.log(response) && response.json())
    .then((json) => {
      console.log(json);
      dispatch(receiveBoards(json));
    })
    .catch((err) => {
      console.log(err);
    });
};
