import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoadingMessage from '../components/LoadingMessage';
import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      buttonDisable: false,
      infoSaved: false,
      user: {
        name: '',
        email: '',
        description: '',
        image: '',
      },
    };
  }

  componentDidMount() {
    this.handleUserInfo();
  }

  componentWillUnmount() {
    // this.setState({ infoSaved: false });
  }

  handleUserInfo = () => {
    this.setState({ loading: true }, () => {
      getUser().then((user) => this
        .setState({ user, loading: false }));
    });
  };

  validation = () => {
    const { user: { name, email, description, image } } = this.state;
    const isValid = [];
    isValid.push(
      name.length > 0
      && email.length > 0
      && description.length > 0
      && image.length > 0,
    );

    if (isValid.every((condition) => condition === true)) {
      this.setState({ buttonDisable: false });
    } else {
      this.setState({ buttonDisable: true });
    }
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    const { user } = this.state;
    this.setState(() => ({ user: { ...user, [name]: value } }), () => this.validation());
  };

  onSaveClick = (event) => {
    event.preventDefault();

    const { user } = this.state;
    this.setState({ infoSaved: true });
    updateUser(user);
  }

  render() {
    const {
      state:
      {
        loading,
        buttonDisable,
        infoSaved,
        user:
        {
          name,
          email,
          description,
          image,
        },
      },
      handleChange,
      onSaveClick } = this;
    return (
      <div data-testid="page-profile-edit">
        Profile Edit Page
        {infoSaved && <Redirect to="/profile" />}
        {loading ? (<LoadingMessage />) : (
          <form>

            <div>
              <input
                value={ image }
                type="text"
                data-testid="edit-input-image"
                onChange={ handleChange }
                name="image"
              />
            </div>

            <label htmlFor="inputName">
              <input
                value={ name }
                data-testid="edit-input-name"
                type="text"
                id="inputName"
                onChange={ handleChange }
                name="name"
              />
            </label>

            <label htmlFor="inputEmail">
              <input
                value={ email }
                data-testid="edit-input-email"
                type="email"
                id="inputEmail"
                onChange={ handleChange }
                name="email"
              />
            </label>

            <label htmlFor="inputDescription">
              <input
                value={ description }
                data-testid="edit-input-description"
                type="text"
                id="inputDescription"
                onChange={ handleChange }
                name="description"
              />
            </label>

            <button
              data-testid="edit-button-save"
              type="submit"
              disabled={ buttonDisable }
              onClick={ onSaveClick }
            >
              Salvar

            </button>
          </form>
        )}

      </div>
    );
  }
}
