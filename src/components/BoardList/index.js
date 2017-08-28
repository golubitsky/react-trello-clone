import React from 'react';
import PropTypes from 'prop-types';

const BoardList = ({ boards, isFetching }) => {
  if (isFetching) {
    return <div>fetching</div>;
  }

  return (<ul>
    {boards.map(board =>
      <li key={`board-${board.id}`}>{board.title}</li>
    )}
  </ul>);
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default BoardList;
