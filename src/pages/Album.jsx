import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicCard from '../components/MusicCard';
import * as musics from '../services/musicsAPI';

export default class Album extends Component {
  constructor(props) {
    super();

    const { match: { params: { id } } } = props;

    this.state = {
      idAlbum: id,
      dataAlbum: [],
      albumArtistName: '',
      collectionName: '',
    };
  }

  componentDidMount() {
    const { idAlbum } = this.state;

    musics.default(idAlbum).then((promisse) => {
      this.setState({
        dataAlbum: promisse,
        albumArtistName: promisse[0].artistName,
        collectionName: promisse[0].collectionName,
      });
    });
  }

  render() {
    const { state: { albumArtistName, collectionName, dataAlbum } } = this;
    // trackId, trackName, trackViewUrl
    return (
      <section data-testid="page-album">
        <h3 data-testid="artist-name">{albumArtistName}</h3>
        <p data-testid="album-name">{collectionName}</p>
        {dataAlbum.map((data) => data.trackName && (
          <MusicCard
            key={ data.trackId }
            trackName={ data.trackName }
            trackId={ data.trackId }
            previewUrl={ data.previewUrl }
            allData={ data }
          />
        ))}
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
