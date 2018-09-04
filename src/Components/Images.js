import React from 'react';
import Image from './Image';
import NoResults from './NoResults';

const Images = props => {

    const results = props.data;
    let images;
    if(results.length > 0) {
        images = results.map(data =>
            <Image
                url={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`}
                key={data.id}
                alt={data.title}/>
        );
    } else {
        images = <NoResults />
    }

    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {images}
            </ul>
        </div>
    );

}


export default Images;