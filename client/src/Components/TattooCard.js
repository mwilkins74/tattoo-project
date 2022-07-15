import React, {useState} from "react";

function TattooCard({ id, src, user, tattoo, likedList, setLikedList }) {
  const [liked, setLiked] = useState(false);
  function handleLike() {
    // console.log(user.id)
    // console.log(id)
    // console.log(user.username)
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        tattoo_id: id,
        label: user.username
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      })
      .catch((err) => console.error(err));
  
    // let tattoo = tattoo.id
    // console.log("Im liking");
    setLikedList([...likedList, tattoo]);
    setLiked(liked);
  }

  return (
    <div onClick={handleLike}>
      <img
        src={src}
        alt=""
        className="images"
      />
    </div>
  );
}

export default TattooCard;
