import React from 'react';

/*404 page to be displayed in case the user has entered a non-valid URL.*/
const DeadEnd = () => (
    <li className="not-found">
        <h3>Oooops!</h3>
        <p>This page does not exist. Try the Search Field to continue.</p>
    </li>
);

export default DeadEnd;