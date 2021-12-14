import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/albumCard.css';
import thumbnail from '../images/album-capa.png'; 
  
export default class AlbumCard extends Component {
  render() {
    const { allData } = this.props;
    return (
      <main>
        {allData.map(({ artistName, collectionId, collectionName }) => (
          <div
            className='album-card-results'
            key={collectionId}>
            <img
              className='album-card-image'
              src={thumbnail}
              alt="thumbnail-padrãos" />
            <h3 className='name-artist'>{artistName}</h3>
            <h4 className='album-description'>{collectionName}</h4>
            <h4 className='link-album'>
              <Link
                className='link-text'
                data-testid={`link-to-album-${collectionId}`}
                to={`/album/${collectionId}`}
              >
                Página do álbum

              </Link>
            </h4>
          </div>
        ))}
      </main>
    );
  }
}

AlbumCard.propTypes = {
  allData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
