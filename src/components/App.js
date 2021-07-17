import React from 'react';
import Character from './Character';
import Crowd from './Crowd';

class App extends React.Component {

    // state = { images: [] };

    // onSearchSubmit = async term => {
    //     const response = await unsplash.get('/search/photos', {
    //         params: { query: term }
    //     });

    //     this.setState({ images: response.data.results });

        
    // }

    render () {
        // return (
        //     <div className="ui container" style={{ marginTop: '10px' }}>
        //         <SearchBar onSubmit={this.onSearchSubmit} />
        //         Found: {this.state.images.length} images
        //         <ImageList images={this.state.images}/>
        //     </div>
        // );
        return (
            <Crowd />
        );
    }
};

export default App;

// DE8dGrQnnjjsgyO68C0nnzSQaIAzlsOcbVL2sc90SU8
// 6DS8Anxn5WsEA75ovtvHVq986sbj7yH8_vByIVEwCo8