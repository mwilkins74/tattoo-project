import React from "react";
import TattooCard from "./TattooCard";
// import Button from 'react-bootstrap/Button'

function TattooList({ tattoos }) {

  // const theTattoos = { tattoos };
  function sliceTattoos(theTattoos, chunkSize) {
    const response = [];
    for (let i = 0; i < theTattoos.length; i += chunkSize) {
      const chunk = theTattoos.slice(i, i + chunkSize);
      response.push(chunk);
    }
    return response;
  }

  let equalArray = sliceTattoos(tattoos, 14);
  // console.log(tattoos);
  return (
    <div className="row">
      {equalArray.map((arr) => {
        return (
          <div className="column">
            {arr.map((tattoo) => {
              return (
                <TattooCard key={tattoo.id} tattoo={tattoo} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TattooList;
