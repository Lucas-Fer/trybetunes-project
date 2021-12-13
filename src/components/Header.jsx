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
    this.handleMount();
  }

  // componentDidUpdate() {
  //   this.handleMount();
  // }

  handleMount = () => {
    userApi.getUser()
      .then(({ name, image }) => {
        this.setState({ userInfo: name, image: image, loading: false });
        if (!image) this.handleNotImage();
        if (!name) this.handleNotName();
      });
  }

  handleNotImage = () => {
    const noImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVdufczZfY6ufE_-iVlv-fQh_jRY7f2c-3Q&usqp=CAU'
    this.setState({image: noImage})
  }

  handleNotName = () => {
    const notUser = 'Usuário(a)'
    this.setState({userInfo: notUser})
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
          <Link
            className="link-decoration"
            data-testid="link-to-favorites"
            to="/favorites">Músicas favoritas
          </Link>
          <Link
            className="link-decoration"
            data-testid="link-to-search"
            to="/search">Pesquisar músicas
          </Link>
          <Link
            className="link-decoration"
            data-testid="link-to-profile"
            to="/profile">Visualizar Perfil
          </Link>
        </div>
      </header>
    );
  }
}
