import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        console.log(term);
        axios.get('hhtps://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authourization: 'Client-ID DE8dGrQnnjjsgyO68C0nnzSQaIAzlsOcbVL2sc90SU8'
            }
        });
    }

    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default App;

// DE8dGrQnnjjsgyO68C0nnzSQaIAzlsOcbVL2sc90SU8
// 6DS8Anxn5WsEA75ovtvHVq986sbj7yH8_vByIVEwCo8