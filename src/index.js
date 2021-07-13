import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      lat: 0, errorMessage: 'woof'
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    // return (
    //   <div>
    //     Latitude: {this.state.lat} 
    //     <br />
    //     Error: {this.state.errorMessage}
    //   </div>
    // );
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat} </div>
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
