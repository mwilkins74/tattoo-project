import React, { useState, useEffect } from "react";

import TattooListFavorite from "./TattooListFavorite";
import { useNavigate } from "react-router-dom";

function Profile({ user, likedList, setLikedList }) {
  const [tattoos, setTattoos] = useState([]);
  let navigate = useNavigate();

  //render favorites
  useEffect(() => {
    fetch("/my-favorites")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTattoos(data);
      });
  }, []);

  //Delete function for tattoos

  


  //DELETE FUNCTION FOR ACCOUNT

  function handleDelete(user) {
    fetch(`/user/${user.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          navigate("/");
        });
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }


  console.log(tattoos)
  return (
    <div>
      <h1 className="header-h1">Profile Page</h1>
      <h2>{user.username}</h2>
      <img
        stlye={{ width: "160px", height: "160px", borderRadius: "80px" }}
        src={user.profile_img}
        alt={user.profile_img}
      />
      <br />
      {/* <button input="text" onChange={handleChangeProfilePic}>
        {" "}
        Add new Profile Pic
      </button> */}
      <h2 className="favorites-container">Favorite Tattoos</h2>
      {/* <ul>{onTattooLike}</ul> */}
      <div>
        <div className="row">
          <div className="column">
            <TattooListFavorite
              tattoos={tattoos}
              likedList={likedList}
              setLikedList={setLikedList}
              setTattoos={setTattoos}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Delete your Account</h2>
        <button onClick={() => handleDelete(user)}>Delete</button>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Profile;
