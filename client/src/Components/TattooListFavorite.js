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

  function handleDelete(){
      fetch('/my-favorites', {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          r.json().then((tattoo) => {
           setLikedList(tattoo);
          });
        } else {
          r.json().then((err) => console.log(err.errors));
        }
      });
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
                  onClick={handleDelete}
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
