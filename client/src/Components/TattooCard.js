import React from 'react';

function TattooCard({ image_url}) {

    return (
      <div>
        <img src={image_url} />
       </div>
    );
}

export default TattooCard;



