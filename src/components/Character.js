import React from 'react';
import './Character.css';

class Character extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            speech: [
                'Why hello there!!!',
                'No way!',
                'Cool beans!',
                "Who?"
            ],
            currentText: '',
            index: 0,
        };
    }
    
    componentDidMount() {
        this.setState({ currentText: this.state.speech[this.state.index] });
    }

    changeText = () => {
        this.setState({ currentText: this.state.speech[this.state.index] });
        let newIndex = (this.state.index + 1) % 4;
        this.setState({ index: newIndex });
        if(this.state.index === 3) this.props.onExcitedState();
    }

    render() {
        const name = this.props.name;
        return (
            <div onClick={this.changeText} className="character">
                {name} says: {this.state.currentText}
            </div>
        );
    }

}

export default Character;