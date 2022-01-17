import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name, score, avatar } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ `${avatar}` }
          alt="avatar-player"
        />
        <p>
          Jogador:
          {' '}
          <span data-testid="header-player-name">
            { name }
          </span>
        </p>
        <p>
          Placar:
          {' '}
          <span data-testid="header-score">
            { score }
          </span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
  avatar: state.player.gravatarEmail,
});

export default connect(mapStateToProps, null)(Header);
