import React from "react";
import TattooCard from "./TattooCard";

function TattooListFavorite({ user, tattoos, likedList, setLikedList }) {
  function sliceTattoos(theTattoos, chunkSize) {
    const response = [];
    for (let i = 0; i < theTattoos.length; i += chunkSize) {
      const chunk = theTattoos.slice(i, i + chunkSize);
      response.push(chunk);
    }
    return response;
  }

  let equalArray = sliceTattoos(tattoos, 3);
  console.log(tattoos);
  return (
    <div className="row">
      {equalArray.map((arr) => {
        return (
          <div className="column">
            {arr.map((tattoo) => {
              return (
                <TattooCard
                  user={user}
                  key={tattoo.tattoo.id}
                  id={tattoo.tattoo.id}
                  src={tattoo.tattoo.image_url}
                  likedList={likedList}
                  setLikedList={setLikedList}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TattooListFavorite;
