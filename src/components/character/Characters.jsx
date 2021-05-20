import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from './Character';

const Characters = ({ characters }) => (
    <ul aria-label="characters">
        {characters.map(character => (
            <li key={character._id}>
                <Link to={`/${character._id}`}>
                    <Character
                        id={character._id}
                        image={character.photoUrl}
                        name={character.name}
                    />
                </Link>
            </li>
        ))}
    </ul>
);

Characters.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            photoUrl: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Characters;