import React from 'react';
import {NavLink} from "react-router-dom";

/*If the user has left the search field empty but submits the form, he or she will be encouraged to enter one.*/
const EmptySearch = () => (
    <li className="not-found">
        <h3>No Results Found</h3>
        <p>You might want to enter a search term. Try <NavLink to="/search/unicorns">unicorns for example!</NavLink></p>
    </li>
);

export default EmptySearch;