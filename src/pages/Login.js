import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { fetchToken, playerLogin } from '../actions';

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

  handleClick = async () => {
    const { myFirstDispatch, history, dispatchPlayerDatas } = this.props;
    const { name, email } = this.state;
    const gravatarHash = md5(email).toString();
    const avatar = (`https://www.gravatar.com/avatar/${gravatarHash}`);
    dispatchPlayerDatas(name, avatar);
    await myFirstDispatch();
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
              onClick={ this.handleClick }
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
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  myFirstDispatch: PropTypes.func.isRequired,
  dispatchPlayerDatas: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  myFirstDispatch: () => dispatch(fetchToken()),
  dispatchPlayerDatas: (name, hash) => dispatch(playerLogin(name, hash)),
});

export default connect(null, mapDispatchToProps)(Login);
