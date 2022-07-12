import React from 'react';
import TattooCard from './TattooCard';

function TattooList({ tattoos, setTattoos }) {
  const theTattoos = tattoos.map((tattoo) => {
      <TattooCard
          key={tattoo.id}
          id={tattoo.id}
          tattoo={tattoo}
          image_url={tattoo.image_url} />;
  });

  return (<div>{theTattoos}</div>)
}

export default TattooList;