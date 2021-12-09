import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import LoadingMessage from '../components/LoadingMessage';

export default class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      favoriteSongData: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.handleFavoriteMusicTwo();
  }

  handleFavoriteMusicTwo = () => {
    this.setState({ loading: true }, () => {
      getFavoriteSongs()
        .then((song) => this
          .setState({ favoriteSongData: song, loading: false }));
    });
  }

  render() {
    const { state: { favoriteSongData, loading }, handleFavoriteMusicTwo } = this;
    return (
      <div data-testid="page-favorites">
        {favoriteSongData.length > 0 ? (
          <h1>Sua lista de músicas</h1>) : (<h1>Sem músicas favoritas</h1>)}

        {loading ? <LoadingMessage /> : favoriteSongData
          .map((data) => data.trackName && (
            <MusicCard
              key={ data.trackId }
              trackName={ data.trackName }
              trackId={ data.trackId }
              previewUrl={ data.previewUrl }
              allData={ data }
              handleFavoriteMusicTwo={ handleFavoriteMusicTwo }
            />
          ))}
      </div>
    );
  }
}
