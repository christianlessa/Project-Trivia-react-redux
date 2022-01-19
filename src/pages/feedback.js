import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class feedback extends Component {
  render() {
    const { assertions } = this.props;
    const three = 3;
    return (
      <div>
        <Header />
        <h2 data-testid="feedback-text">
          {assertions < three ? 'Could be better...' : 'Well Done!' }
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(feedback);
