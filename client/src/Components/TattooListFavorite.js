import React, { useEffect } from "react";
import TattooCard from "./TattooCard";

function TattooListFavorite({ user, tattoos, likedList, setLikedList, setTattoos }) {

  function sliceTattoos(theTattoos, chunkSize) {
    const response = [];
    for (let i = 0; i < theTattoos.length; i += chunkSize) {
      const chunk = theTattoos.slice(i, i + chunkSize);
      response.push(chunk);
    }
    return response;
  }

  // function handleDeleteTattoo(id){
  //   fetch(`/my-favorites/${(id)}`, {
  /   method: "DELETE",
  //   }).then((r) => {
  //     if (r.ok) {
  //       r.json().then((data) => {
  //       setTattoos(data);
  //       });
  //     } else {
  //       r.json().then((err) => console.log(err.errors));
  //     }
  //   });
// }

  function handleDelete(tattoo) {
    console.log("delete called")
    fetch((`/my-favorites/${tattoo.id}`), 
    {method: 'DELETE'}).then(res => res.json()
    .then(data => { setTattoos(tattoos.filter(tat=> tat.tattoo.id !== data.tattoo.id))
    })
    )
  }
  
  let equalArray = sliceTattoos(tattoos, 3);
  console.log(tattoos);
  return (
    <div>
      {equalArray.map((arr) => {
        return (
          <div>
            {arr.map((tattoo) => {
              return (
                <div>
                <TattooCard
                  user={user}
                  key={tattoo.tattoo.id}
                  id={tattoo.tattoo.id}
                  src={tattoo.tattoo.image_url}
                  likedList={likedList}
                  setLikedList={setLikedList}
                />
                <button onClick={()=>handleDelete(tattoo)}>Delete favorite</button>
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