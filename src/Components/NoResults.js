import React from 'react';
import {NavLink} from "react-router-dom";

const NoResults = () => (
    <li className="not-found">
        <h3>No Results Found</h3>
        <p>Your search did not return any results. <NavLink to="/search">Please try again.</NavLink></p>
    </li>
);

export default NoResults;