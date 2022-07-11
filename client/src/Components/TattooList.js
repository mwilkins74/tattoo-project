import React, { useState } from 'react';
import TattooCard from './TattooCard';

function TattooList() {

    const theTattoos = tattoos.map((tattoo) => {
        <TattooCard
            key={tattoo.id}
            id={tattoo.id}
            image_url={tattoo.image_url}
        />
    })
        
    return <div>{theTattoos}</div>
}

export default TattooList;