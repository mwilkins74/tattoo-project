import React from 'react';

function TattooCard({id, image_url}) {

    return (
        <div>
            <img src={image_url} alt="Tattoo" />
        </div>
    )
}

export default TattooCard;



