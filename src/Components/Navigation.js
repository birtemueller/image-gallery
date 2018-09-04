import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';

const Navigation = props => (

    <div>
        <nav className="main-nav">
            <ul>
                <li><a href="/cats">Cats</a></li>
                <li><a href="/dogs">Dogs</a></li>
                <li><a href="/computers">Computers</a></li>
            </ul>
        </nav>
    </div>
);

export default Navigation;