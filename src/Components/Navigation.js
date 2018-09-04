import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';
import Results from "./Results";

const Navigation = props => (

    <div>
        <nav className="main-nav">
            <ul>
                <li><a href="/cats">Cats</a></li>

            </ul>
        </nav>




    </div>






);

export default Navigation;