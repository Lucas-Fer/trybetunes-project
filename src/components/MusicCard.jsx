import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import LoadingMessage from './LoadingMessage';
import '../css/musicCard.css';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      favorite: false,
      loading: false,
    };
  }

  componentDidMount() {
    getFavoriteSongs()
      .then((song) => this.getFavoriteMusic(song));
  }

  getFavoriteMusic = (song) => {
    const { trackId } = this.props;

    if (song.some((value) => value.trackId === trackId)) {
      this.setState({ favorite: true });
    }
  };

  handleFavoriteMusic = ({ target: { checked } }) => {
    const { allData } = this.props;
    const { handleFavoriteMusicTwo } = this.props;
    if (checked) {
      this.setState({ favorite: true, loading: true }, () => {
        addSong(allData)
          .then(() => this.setState({ loading: false }, handleFavoriteMusicTwo));
      });
    } else {
      this.setState({ favorite: false, loading: true }, () => {
        removeSong(allData)
          .then(() => this.setState({ loading: false }, handleFavoriteMusicTwo));
      });
    }
  };

  render() {
    const { trackName, trackId, previewUrl } = this.props;
    const { state: { favorite, loading }, handleFavoriteMusic } = this;
    return (
      <>

        <div className='preview-music'>
          <h3>{trackName}</h3>
          <audio data-testid="audio-component" src={previewUrl} controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
            .
          </audio>

          <label htmlFor={`inputFavorite-${trackName}`}>
            {/* Favorita */}
            {loading ? (<LoadingMessage />) : (
              <>
                Favorita
                <input
                  type="checkbox"
                  data-testid={`checkbox-music-${trackId}`}
                  id={`inputFavorite-${trackName}`}
                  checked={favorite}
                  onChange={handleFavoriteMusic}
                  className='checkbox-input'
                />
              </>
            )}
          </label>
        </div>

      </>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  allData: PropTypes.objectOf(PropTypes.any).isRequired,
  handleFavoriteMusicTwo: PropTypes.func.isRequired,
};
