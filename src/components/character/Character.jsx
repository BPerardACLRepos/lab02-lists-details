import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ id, image, name }) => (
    <figure>
        <img src={image} alt={name} />
        <figcaption>
            <h3>{name}</h3>
            <p>{id}</p>
        </figcaption>
    </figure>
);

Character.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Character;