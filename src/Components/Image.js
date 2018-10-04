import React from 'react';

//creates the list items for the image list.
//properties are received from the 'Images' component

const Image = props => (
    <li>
        <img src={props.url} alt={props.alt}/>
    </li>
);

export default Image;