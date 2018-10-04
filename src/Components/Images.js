import React from 'react';
import Image from './Image';

const Images = props => {

    const results = props.data;
    const query = props.query;
    let images;
    //loops through the results array and processes the data to make it usable
        images = results.map(data =>
            <Image
                url={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`}
                key={data.id}
                alt={data.title}/>
        );

    //creates a list of images
    return(
        <div className="photo-container">
            <h2>Results for {query}</h2>
            <ul>
                {images}
            </ul>
        </div>
    );
};


export default Images;