import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as userApi from '../services/userAPI';
import LoadingMessage from './LoadingMessage';
import logo from '../images/logo3.png';
import '../css/header.css';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: '',
      loading: true,
      image: '',
    };
  }

  componentDidMount() {
    userApi.getUser()
      .then(({ name, image }) => this.setState({ userInfo: name, image: image,loading: false }));
  }

  render() {
    const { state: { userInfo, image, loading } } = this;
    return (
      <header data-testid="header-component">
        <div id="header-user-logo">
          <img
            src={logo}
            alt="logo"
            id="logo"
          />
          <h1 id="title">TrybeTunes</h1>
          {loading ? (
            <LoadingMessage />
          ) : (
              <span
                id="header-user-info"
                data-testid="header-user-name">
                <img
                  src={image}
                  className="user-logo"
                  alt="perfil-user"
                />
                {userInfo}
            </span>
          )}
        </div>

        <div id="header-links">
          <div className="header-link">
            <Link
              className="link-decoration"
              data-testid="link-to-favorites"
              to="/favorites">Músicas favoritas
            </Link>
          </div>
          <div className="header-link">
            <Link
              className="link-decoration"
              data-testid="link-to-search"
              to="/search">Pesquisar músicas
            </Link>
          </div>
          <div className="header-link">
            <Link
              className="link-decoration"
              data-testid="link-to-profile"
              to="/profile">Visualizar Perfil
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
