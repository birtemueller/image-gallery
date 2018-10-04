import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';

import Results from './Components/Results';
import DeadEnd from './Components/404';
import SearchForm from "./Components/SearchForm";
import Navigation from "./Components/Navigation";

export default class App extends Component {
    render() {
        return (

            <BrowserRouter forceRefresh={true}>
                {/*forces the site to refresh after a new topic has been selected via navigation or search*/}
                <div className="container">
                    <Navigation />
                    <Switch>
                        <Route path="/search/:query" render={ props => <Results query={ props.match.params.query }/> } />
                        <Route exact path="/" render={ () => <Results query='Birds'/> } />
                        {/*Search queries are passed to the Results component through the URL. The Default query when entering the page is 'Birds'.*/}
                        <Route path="/search" component={SearchForm} />
                        <Route component={DeadEnd} />
                        {/*404 error route that displays when a URL path does not match a route. */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}