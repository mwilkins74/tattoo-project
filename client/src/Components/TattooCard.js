import React, {useState} from 'react';

function TattooCard({ onTattooLike }) {
  const [liked, setLiked] = useState(false)

  function handleLike() {
    onTattooLike(tattoo)
    setLiked(!liked)
  }

    return (
      <div>
        <div>
          <img src={image_url} />
        </div>
      </div>
    );
}

export default TattooCard;



