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

  function handleDelete() {
    fetch("/delete-favorites", {
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

  let equalArray = sliceTattoos(tattoos, 4);
  // console.log(tattoos);
  return (
    <div>
      {equalArray.map((arr) => {
        return (
          <div>
            {arr.map((tattoo) => {
              return (
                <div className="faves">
                  <TattooCard
                    user={user}
                    key={tattoo.tattoo.id}
                    id={tattoo.tattoo.id}
                    src={tattoo.tattoo.image_url}
                    likedList={likedList}
                    setLikedList={setLikedList}
                    onClick={handleDelete}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TattooListFavorite;
