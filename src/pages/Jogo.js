import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAnswers, fetchToken, somar } from '../actions';
import randomizeArray from '../helpers/randomizeArray';

class Jogo extends Component {
  constructor() {
    super();
    this.state = {
      randomizedAnswers: [],
      category: '',
      question: '',
      incorrectAnswers: [],
      time: 30,
      correctAnswer: '',
      classNameCorrect: '',
      classNameIncorrect: '',
      isDisabled: false,
    };
    this.colorAnswers = this.colorAnswers.bind(this);
  }

  async componentDidMount() {
    const { dispatchAnswers } = this.props;
    await dispatchAnswers();
    const { answers, dispatchToken } = this.props;
    const expiredResponseCode = 3;
    if (answers.response_code === expiredResponseCode) {
      await dispatchToken();
      await dispatchAnswers();
    }
    this.randomizeAnswers();
    this.setTimer();

    // dados macadoss
    // const time = 17;
    // const dificudade = 'medium';
    // função atualiza o stado ´player.score e o localstore.soma
    // this.functionSomaPlacar(time, dificudade);
  }

  componentDidUpdate() {
    this.handleExpireTime();
  }

  handleExpireTime = () => {
    const { time } = this.state;
    if (time === 0) {
      this.setState({ time: 30, isDisabled: true });
    }
  }

  setTimer = () => {
    const interval = 1000;
    setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time - 1 }));
    }, interval);
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

 functionSomaPlacar = (timer, grau) => {
   const { dispatchSoma } = this.props;
   const dez = 10;
   const dificuldade = { hard: 3, medium: 2, easy: 1 };
   const soma = (timer * dificuldade[grau]) + dez;
   localStorage.setItem('soma', soma);
   dispatchSoma(soma);
 }

  handleChange = (value) => {
    const { time, correctAnswer } = this.state;
    if (value === correctAnswer) { this.functionSomaPlacar(time, 'medium'); }
    this.setState({ isDisabled: true });
  };

  colorAnswers() {
    this.setState({
      classNameCorrect: 'green',
      classNameIncorrect: 'red',
    });
  }

  render() {
    const {
      randomizedAnswers,
      category,
      question,
      incorrectAnswers,
      correctAnswer,
      classNameCorrect,
      classNameIncorrect,
      time,
      isDisabled,
    } = this.state;
    return (
      <div>
        <Header />
        <main>
          <h1>Game Page</h1>
          <h3>{ time }</h3>
          <h3 data-testid="question-category" className="test">{category}</h3>
          <h2 data-testid="question-text">{question}</h2>
          <section data-testid="answer-options">
            {
              randomizedAnswers.map((answer) => (
                <button
                  name="resposta"
                  onClick={ () => { this.handleChange(answer); this.colorAnswers(); } }
                  key={ answer }
                  type="button"
                  disabled={ isDisabled }
                  className={ answer === correctAnswer
                    ? classNameCorrect : classNameIncorrect }
                  data-testid={ answer === correctAnswer ? 'correct-answer'
                    : `wrong-answer-${incorrectAnswers.indexOf(answer)}` }
                  // onClick={  }
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
  dispatchSoma: (score) => dispatch(somar(score)),
});

const mapStateToProps = (state) => ({
  answers: state.answers,
});

Jogo.propTypes = {
  dispatchAnswers: PropTypes.func.isRequired,
  dispatchSoma: PropTypes.func.isRequired,
  dispatchToken: PropTypes.func.isRequired,
  answers: PropTypes.shape({
    response_code: PropTypes.number.isRequired,
    results: PropTypes.arrayOf(Object),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Jogo);
