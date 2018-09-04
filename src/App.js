import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
//import apiKey from '../TO_MOVE/config';

import SearchForm from './Components/SearchForm';
import Navigation from './Components/Navigation';
import Results from './Components/Results';
import NoResults from "./Components/NoResults";


export default class App extends Component {
    render() {

        return (

            <div className="App">
                <div className="container">
                    <SearchForm onSearch={this.performSearch}/>
                    <Navigation/>
                    <Results />
                </div>
            </div>

        );
    }
}