import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicCard from '../components/MusicCard';
import * as musics from '../services/musicsAPI';
import '../css/album.css';
import thumbnail from '../images/album-capa.png';

export default class Album extends Component {
  constructor(props) {
    super();

    const { match: { params: { id } } } = props;

    this.state = {
      idAlbum: id,
      dataAlbum: [],
      albumArtistName: '',
      collectionName: '',
      thumbnail: '',
    };
  }

  componentDidMount() {
    const { idAlbum } = this.state;

    musics.default(idAlbum).then((promisse) => {
      this.setState({
        dataAlbum: promisse,
        albumArtistName: promisse[0].artistName,
        collectionName: promisse[0].collectionName,
        thumbnail: thumbnail,
      });
    });
  }

  render() {
    const { state: { albumArtistName, collectionName, dataAlbum, thumbnail } } = this;
    // trackId, trackName, trackViewUrl
    return (
      <section className='main-album-section' data-testid="page-album">
        <div id="music-description-section">
          <img
            className='album2-card-image'
            src={thumbnail}
            alt="thumbnail-padrão" />
          <h3 data-testid="artist-name">{albumArtistName}</h3>
          <p data-testid="album-name">{collectionName}</p>
        </div>

        <div className='music-preview-section'>
          {dataAlbum.map((data) => data.trackName && (
            <MusicCard
              key={data.trackId}
              trackName={data.trackName}
              trackId={data.trackId}
              previewUrl={data.previewUrl}
              allData={data}
            />
          ))}
        </div>

      </section>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
