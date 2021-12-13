import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoadingMessage from '../components/LoadingMessage';
import '../css/login.css'

import * as userApi from '../services/userAPI';
import '../css/login.css'
export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: '',
      },
      buttonLoginDisable: true,
      loading: false,
      userLogin: false,
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue({ target }) {
    const { value } = target;
    const THREE = 3;

    this.setState(() => ({
      user: { name: value },
    }), () => (value.length >= THREE ? this
      .setState({ buttonLoginDisable: false }) : this
      .setState({ buttonLoginDisable: true })));
  }

  handleUserApi = () => {
    const { user } = this.state;
    this.setState({ loading: true }, () => {
      userApi.createUser(user).then(() => this
        .setState({ loading: false, userLogin: true }));
    });
  }

  render() {
    const {
      state: {
        user: {
          name,
        },
        buttonLoginDisable,
        loading,
        userLogin,
      }, handleInputValue, handleUserApi } = this;

    return (
      <form className='wrap-login100' data-testid="page-login">
        {loading && <LoadingMessage />}
        {userLogin && <Redirect to="/search" />}
        <div className='form-content'>
          <h2>LOG  IN</h2>
          <label htmlFor="login-name-input">
            <input
              minLength={3}
              required
              placeholder='Insira seu nome'
              data-testid="login-name-input"
              type="text"
              name="inputText"
              id="inputText"
              onChange={ handleInputValue }
              value={ name }
            />
          </label>

          <button
            data-testid="login-submit-button"
            name="inputButton"
            id="inputButton"
            type="button"
            disabled={ buttonLoginDisable }
            onClick={ handleUserApi }
          >
            Entrar
          </button>
        </div>

      </form>
    );
  }
}
