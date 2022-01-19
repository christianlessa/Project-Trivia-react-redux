import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class feedback extends Component {
  render() {
    const { assertions, score } = this.props;
    const three = 3;
    return (
      <div>
        <Header />
        <h2 data-testid="feedback-text">
          {assertions < three ? 'Could be better...' : 'Well Done!'}
        </h2>
        <div>
          {assertions === 1 ? (
            <p>
              você acertou apenas
              {' '}
              <span data-testid="feedback-total-question">{assertions}</span>
              {' '}
              questão!
            </p>
          ) : (
            <p>
              você acertou:
              {' '}
              <span data-testid="feedback-total-question">{assertions}</span>
              {' '}
              questões!
            </p>
          )}
          <p>
            Seu placar é:
            {' '}
            <span data-testid="feedback-total-score">{score}</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(feedback);
