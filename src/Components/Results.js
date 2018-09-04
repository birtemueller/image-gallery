import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import axios from 'axios';
import apiKey from '../Config'

import Images from './Images';
import SearchForm from './SearchForm'

export default class Results extends Component  {

    constructor() {
        super();
        this.state = {
            images: [],
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    images: response.data.photos.photo,
                    loading: false

                })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
                this.setState({
                    loading: false
                })
            });
    };

    render() {
        console.log(this.state.images);
        console.log(this.state.loading);
        console.log(this.state.images.length);
        console.log(this.props.query);

        if (this.state.loading)
            return <p>Loading...</p>;

            else {
                return (<Images data={this.state.images} />)
        }
    }
}