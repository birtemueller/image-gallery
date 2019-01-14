import React from 'react';

/*Error page that indicates if the search didn't return any results.*/
const NoResults = () => (
    <li className="not-found">
        <h3>No Results Found</h3>
        <p>Your search did not return any results. Please try again.</p>
    </li>
);

export default NoResults;