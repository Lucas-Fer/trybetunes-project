import React, { Component } from 'react';
import * as searchApi from '../services/searchAlbumsAPI';
import LoadingMessage from '../components/LoadingMessage';
import AlbumCard from '../components/AlbumCard';
import '../css/search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      isDisable: true,
      messageResult: '',
      loading: false,
      allData: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ inputValue: value }, () => (
      value.length >= 2 ? this
        .setState({ isDisable: false }) : this
          .setState({ isDisable: true })
    ));
  }

  handleClick = () => {
    const { inputValue } = this.state;

    this.setState({ loading: true });

    searchApi.default(inputValue).then((promisse) => {
      // console.log(promisse);
      if (!promisse.length) {
        this.setState({
          messageResult: 'Nenhum álbum foi encontrado',
          loading: false,
          allData: promisse,
          inputValue: '',
        });
      } else {
        this.setState({
          loading: false,
          allData: promisse,
          inputValue: '',
          messageResult: `Resultado de álbuns de: ${inputValue}`,
        });
      }
    });
  };

  render() {
    const { state: {
      inputValue,
      isDisable,
      messageResult,
      loading,
      allData,
    },
      handleChange,
      handleClick,
    } = this;
    return (
      <div>
        {!loading ? (
          <div className='search-music' data-testid="page-search">
            <label htmlFor="inputValue">
              <input
                placeholder='Nome do artista'
                data-testid="search-artist-input"
                type="text"
                name="nameArtist"
                id="inputValue"
                onChange={handleChange}
                value={inputValue}
                className='input-value-search'
              />
            </label>
            <button
              disabled={isDisable}
              data-testid="search-artist-button"
              type="button"
              onClick={handleClick}
              className='input-button-search'
            >
              Pesquisar

            </button>
          </div>
        ) : (<LoadingMessage />)}

        <div className='album-content'>
          <h1 className='message-result'>{messageResult}</h1>
          <AlbumCard allData={allData} />
        </div>
      </div>
    );
  }
}
