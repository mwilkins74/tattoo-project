import React from "react";
// import Button from "react-bootstrap/Button";
// import Overlay from "react-bootstrap/Overlay"

function TattooCard({ tattoo }) {
  
  return (
    <div>
        <img src={tattoo.image_url} alt="Japanese Tattoo 1" className="images" />
    </div>
  );
}

export default TattooCard;
