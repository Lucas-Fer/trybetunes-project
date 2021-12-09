import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AlbumCard extends Component {
  render() {
    const { allData } = this.props;
    // console.log(allData);
    return (
      <main>
        <h2>Lista de álbuns</h2>

        {allData.map(({ artistName, collectionId, collectionName }) => (
          <div key={ collectionId }>
            <h4>{artistName}</h4>
            <span>{collectionName}</span>
            <Link
              data-testid={ `link-to-album-${collectionId}` }
              to={ `/album/${collectionId}` }
            >
              Página do álbum

            </Link>
          </div>
        ))}
      </main>
    );
  }
}

AlbumCard.propTypes = {
  allData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
