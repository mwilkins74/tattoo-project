import React, {useState} from "react";

function TattooCard({ tattoo, likedList, setLikedList }) {
  const [liked, setLiked] = useState(false);

  function handleLike(tattoo) {
    console.log("Im liking");
    setLikedList([...likedList, tattoo]);
    setLiked(liked);
  }

  return (
    <div onClick={handleLike}>
      <img
        src={tattoo.image_url}
        alt=""
        className="images"
      />
    </div>
  );
}

export default TattooCard;
