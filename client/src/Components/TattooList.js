import React from 'react';
import TattooCard from './TattooCard';


function TattooList({ onTattooLike }) {
     const [isClick, setClick] = useState(false);

  // const theTattoos = tattoos.map((tattoo) => {
  //     <TattooCard
  //       key={tattoo.id}
  //       id={tattoo.id}
  //       image_url={tattoo.image_url}
  //       onTattooLike={onTattooLike}
  //     />;
  // });

  return (
    <div>
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      {theTattoos}
    </div>
  );
}

export default TattooList;