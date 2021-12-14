import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import LoadingMessage from '../components/LoadingMessage';

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      userEmail: 'email@test.com',
      userImage: 'url-to-image',
      userDescription: 'Lorem ipsum',
      loading: false,
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = () => {
    this.setState({ loading: true }, () => {
      getUser()
        .then(({ name, email, image, description }) => this.setState({
          userName: name,
          loading: false,
          userEmail: email,
          userImage: image,
          userDescription: description,
        }));
    });
  };

  render() {
    const { state: { loading, userName, userEmail, userDescription, userImage } } = this;
    return (
      <div id="section-profile" data-testid="page-profile">
        <h1>Seu perfil</h1>
        {loading ? (<LoadingMessage />) : (
          <section>
            <div>
              <img
                data-testid="profile-image"
                src={userImage}
                alt="foto-perfil"
              />
              <Link to="profile/edit">Editar perfil</Link>
            </div>

            <div>
              <span>{userName}</span>
              <span>{userEmail}</span>
              <span>{userDescription}</span>
            </div>
          </section>
        )}
      </div>
    );
  }
}
