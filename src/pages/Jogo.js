import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAnswers, fetchToken } from '../actions';
import randomizeArray from '../helpers/randomizeArray';

class Jogo extends Component {
  constructor() {
    super();
    this.state = {
      randomizedAnswers: [],
      category: '',
      question: '',
      incorrectAnswers: [],
      correctAnswer: '',
    };
  }

  async componentDidMount() {
    const { dispatchAnswers } = this.props;
    await dispatchAnswers();
    const { answers, dispatchToken } = this.props;
    const expiredResponseCode = 3;
    console.log(answers.response_code);
    if (answers.response_code === expiredResponseCode) {
      await dispatchToken();
      await dispatchAnswers();
    }
    this.randomizeAnswers();
  }

  randomizeAnswers = () => {
    const { answers } = this.props;
    const array = [...answers.results[0].incorrect_answers,
      answers.results[0].correct_answer];
    randomizeArray(array);
    this.setState({
      randomizedAnswers: array,
      category: answers.results[0].category,
      question: answers.results[0].question,
      incorrectAnswers: answers.results[0].incorrect_answers,
      correctAnswer: answers.results[0].correct_answer,
    });
  }

  render() {
    const {
      randomizedAnswers,
      category,
      question,
      incorrectAnswers,
      correctAnswer,
    } = this.state;
    return (
      <div>
        <Header />
        <main>
          <h1>Game Page</h1>
          <h3 data-testid="question-category">{category}</h3>
          <h2 data-testid="question-text">{question}</h2>
          <section data-testid="answer-options">
            {
              randomizedAnswers.map((answer) => (
                <button
                  key={ answer }
                  type="button"
                  data-testid={ answer === correctAnswer ? 'correct-answer'
                    : `wrong-answer-${incorrectAnswers.indexOf(answer)}` }
                >
                  { answer }
                </button>
              ))
            }
          </section>
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAnswers: () => dispatch(fetchAnswers()),
  dispatchToken: () => dispatch(fetchToken()),
});

const mapStateToProps = (state) => ({
  answers: state.answers,
});

Jogo.propTypes = {
  dispatchAnswers: PropTypes.func.isRequired,
  dispatchToken: PropTypes.func.isRequired,
  answers: PropTypes.shape({
    response_code: PropTypes.number.isRequired,
    results: PropTypes.arrayOf(Object),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Jogo);
