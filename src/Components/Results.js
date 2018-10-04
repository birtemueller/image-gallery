import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../Config'

import Images from './Images';
import NoResults from "./NoResults";

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

    performSearch = () => {
        // fetches data from the flickr API and passes it to the state
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.query}&per_page=20&format=json&nojsoncallback=1`)
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
        //indicates if search is still in progress
        if (this.state.loading)
            return <p>Loading...</p>;

            //displays the NoResults component if no images have been found
            else {
            if(this.state.images.length === 0){
                return(
                    <NoResults/>
                )
            }
            //displays the images component including the data fetched from the flickr API
            return (<Images data={this.state.images} query={this.props.query}/>)
        }
    }
}