import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import LoadingMessage from '../components/LoadingMessage';
import '../css/profile.css';

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

  handleNotImage = () => {
    const noImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkz_42YTg_DMYNnFCqfxjuOSkZBQrn0-c8g&usqp=CAU';
    this.setState({ userImage: noImage });
  };

  getUserInfo = () => {
    this.setState({ loading: true }, () => {
      getUser()
        .then(({ name, email, image, description }) => {
          this.setState({
            userName: name,
            loading: false,
            userEmail: email,
            userImage: image,
            userDescription: description,
          }); if (!image) this.handleNotImage();
        });

    });
  };

  render() {
    const { state: { loading, userName, userEmail, userDescription, userImage } } = this;
    return (
      <div data-testid="page-profile">
        <h1 style={{ textAlign: "center" }}>Seu perfil</h1>
        {loading ? (<LoadingMessage />) : (
          <section id="section-profile">
            <div id="link-section">
              <img
                className='user-logo'
                data-testid="profile-image"
                src={userImage}
                alt="sem foto de perfil"
              />
              <Link id="link-edit" to="profile/edit">Editar perfil</Link>
            </div>

            <div className='info-section'>
              <h2 className='title-info-profile'>Nome</h2>
              <span>{userName}</span>
            </div>

            <div className='info-section'>
              <h2 className='title-info-profile'>Email</h2>
              {userEmail.length ? <span>{userEmail}</span> : <span>Edite seu perfil e acrescente um e-mail :)</span>}
            </div>

            <div className='info-section-describe'>
              <h2 className='title-info-profile'>Gênero Favorito</h2>
              {userDescription.length ? <span>{userDescription}</span> : <span>Edite seu perfil e acrescente uma descrição :)</span>}
            </div>
          </section>
        )}
      </div>
    );
  }
}
