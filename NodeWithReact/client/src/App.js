import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: ""
        };
    }

    callAPI() {
        // axios.get('http://localhost:9000/testAPI')
        // .then(function (response) {
        //     // Handle success
        //     this.setState({ apiresponse: response })
        // })
        // .catch(function (error) {
        //     // Handle error
        // })
        // .finally(function () {
        //     // Always executed
        // })

        fetch("http://localhost:9000/testAPI")
            .then( res => res.text())
            .then( res => this.setState({ apiResponse: res  }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render () {
        return (
            <div className="App">
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </header> */}
                <h3 className="App-intro">{ this.state.apiResponse }</h3>
            </div>
        );
    }
}

export default App;
