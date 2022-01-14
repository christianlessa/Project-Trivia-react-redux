import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
// import { newAction } from '../actions';
class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      isDisable: true,
    };
  }

  validityForm = () => {
    const { name, email } = this.state;
    if (name !== '' && email !== '') {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validityForm());
  };

  clickenviastore = async () => {
    const { myFirstDispatch, history } = this.props;
    myFirstDispatch();
    history.push('/jogo');
  };

  render() {
    const { email, name, isDisable } = this.state;
    const { history } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              name="name"
              type="text"
              data-testid="input-player-name"
              value={ name }
              onChange={ this.handleChange }
            />
            E-mail:
            <input
              htmlFor="email"
              name="email"
              type="email"
              data-testid="input-gravatar-email"
              value={ email }
              onChange={ this.handleChange }
            />
            <button
              // onClick={ () => this.clickenviastore({ name, email }) };
              onClick={ () => this.clickenviastore() }
              type="button"
              disabled={ isDisable }
              data-testid="btn-play"
            >
              Jogar
            </button>
            <button
              type="button"
              data-testid="btn-settings"
              onClick={ () => {
                history.push('/config');
              } }
            >
              Config
            </button>
          </label>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
  myFirstDispatch: PropTypes.func.isRequired,
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: () => dispatch(fetchMovies()),
});

export default connect(null, mapDispatchToProps)(Login);
