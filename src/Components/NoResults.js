import React from 'react';

/*404 page to be displayed in case the user has entered a non-valid URL.*/
const NoResults = () => (
    <li className="not-found">
        <h3>No Results Found</h3>
        <p>Your search did not return any results. Please try again.</p>
    </li>
);

export default NoResults;