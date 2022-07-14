import React, { useState, useEffect } from "react";
import TattooList from "./TattooList";

function Profile({ user, likedList, setLikedList }) {
  const [tattoos, setTattoos] = useState([]);

  useEffect(() => {
    fetch("/tattoos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTattoos(data);
      });
  }, []);

  return (
    <div>
      <h1 className="header-h1">Profile Page</h1>
      <img
        stlye={{ width: "160px", height: "160px", borderRadius: "80px" }}
        src={user.profile_img}
      />
      <h2 className="favorites-container">Favorite Tattoos</h2>
      <div>
        <div className="row">
          <div className="column">
            <TattooList
              tattoos={tattoos}
              likedList={likedList}
              setLikedList={setLikedList}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
