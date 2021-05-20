import React from 'react';
import { Link } from 'react-router-dom';
import Character from '../components/character/Character';
import { getCharacter } from '../services/avatarApi';

export default class Details extends React.Component {
    state = {
        loading: true,
        character: {},
    }

    async componentDidMount() {
        const character = await getCharacter(this.props.match.params.id);
        this.setState({
            loading: false,
            character,
        });
    }
    render() {
        const { loading, character } = this.state;
        return (
            <div>
                <Link to="/">
                    List
                </Link>
                {loading &&
                    <h2>Loading...</h2>
                }
                {!loading &&
                    <Character
                        id={character._id}
                        image={character.photoUrl}
                        name={character.name}
                    />
                }
            </div>
        )
    }
}