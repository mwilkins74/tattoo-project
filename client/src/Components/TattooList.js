import React from 'react';
import TattooCard from './TattooCard';

function TattooList({ onTattooLike }) {
  const theTattoos = tattoos.map((tattoo) => {
      <TattooCard
        key={tattoo.id}
        id={tattoo.id}
        image_url={tattoo.image_url}
        onTattooLike={onTattooLike}
      />;
  });

  return (<div>{theTattoos}</div>)
}

export default TattooList;