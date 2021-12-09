import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as userApi from '../services/userAPI';
import LoadingMessage from './LoadingMessage';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: '',
      loading: true,
    };
  }

  componentDidMount() {
    userApi.getUser()
      .then(({ name }) => this.setState({ userInfo: name, loading: false }));
  }

  render() {
    const { state: { userInfo, loading } } = this;
    return (
      <header data-testid="header-component">
        Sou o header
        {loading ? (
          <LoadingMessage />
        ) : (<span data-testid="header-user-name">{userInfo}</span>)}
        <br />
        <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Músicas favoritas</Link>
        <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
      </header>
    );
  }
}
