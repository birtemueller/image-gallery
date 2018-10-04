import React from 'react';
import {
    NavLink
} from 'react-router-dom';

const DeadEnd = () => (
    <li className="not-found">
        <h3>Oooops!</h3>
        <p>This page does not exist. Try the <NavLink to="/search">Search Field</NavLink> to continue.</p>
    </li>
);

export default DeadEnd;