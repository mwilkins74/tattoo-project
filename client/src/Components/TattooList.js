import React from "react";
import TattooCard from "./TattooCard";

function TattooList({ user, tattoos, likedList, setLikedList }) {

  function sliceTattoos(theTattoos, chunkSize) {
    const response = [];
    for (let i = 0; i < theTattoos.length; i += chunkSize) {
      const chunk = theTattoos.slice(i, i + chunkSize);
      response.push(chunk);
    }
    return response;
  }

  let equalArray = sliceTattoos(tattoos, 14);
  console.log(tattoos);
  return (
    <div className="faves">
      <div className="row">
        {equalArray.map((arr) => {
          return (
            <div className="column">
              {arr.map((tattoo) => {
                return (
                  <TattooCard
                    user={user}
                    key={tattoo.id}
                    id={tattoo.id}
                    src={tattoo.image_url}
                    likedList={likedList}
                    setLikedList={setLikedList}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TattooList;
