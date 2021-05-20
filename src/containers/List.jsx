import React from 'react';
import { getCharacters } from '../services/avatarApi';
import Characters from '../components/character/Characters';

export default class List extends Component {
    state = {
        loading: true,
        characters: [],
    }

    async componentDidMount() {
        const characters = await getCharacters();
        this.setState({
            loading: false,
            characters,
        });
    }

    render() {
        const { loading, characters } = this.state;

        return (
            <>
                {loading &&
                    <h2>Loading...</h2>
                }
                {!loading &&
                    <Characters characters={characters} />
                }
            </>
        );
    }
}