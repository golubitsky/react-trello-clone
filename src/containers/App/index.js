import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentEnvironment } from '../../utils/env';
import BoardList from '../../components/BoardList';
import { fetchBoards } from '../../actions';

class App extends Component {
  static propTypes = {
    boards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })).isRequired,
    isFetching: PropTypes.bool.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBoards());
  }

  render() {
    return (
      <div>
        <div>Hello world in {getCurrentEnvironment()}!</div>
        <BoardList {...this.props} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
  const { boards, isFetching } = state;

  return {
    boards,
    isFetching
  };
};

export default connect(mapStateToProps)(App);
