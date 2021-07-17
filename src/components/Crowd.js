import { render } from '@testing-library/react';
import React from 'react';
import Character from './Character';

class Crowd extends React.Component {

    state = {characters : [
        {name: 'Johnny'},
        {name: 'Greta'},
        {name: 'Theresa'}
    ]};

    cheer = () => {
        const updatedCharacters = this.state.characters.map((character) => {
            return {name : 'WOA!'};
        });
        this.setState({ characters: updatedCharacters});
        console.log(this.state.characters);
    };

    buildCrowd = () => { 
        return this.state.characters.map((character) => {
            return <Character key={character.name} name={character.name} onExcitedState={this.cheer}/>;
        });
    }

    render() {
        const crowd = this.buildCrowd();
        return <div>
            <h1>{this.state.characters[0].name}</h1>
            {crowd}
        </div>;
    }
};

export default Crowd;