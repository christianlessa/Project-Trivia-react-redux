import React, { Component } from 'react';

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

  render() {
    const { email, name, isDisable } = this.state;
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
              // onClick={ () => this.clickenviastore({ name, email }) }
              type="button"
              disabled={ isDisable }
              data-testid="btn-play"
            >
              Play
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
