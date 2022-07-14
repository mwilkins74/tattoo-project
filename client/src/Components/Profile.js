import React, { useState, useEffect } from "react";
import TattooList from "./TattooList";
import {useNavigate} from 'react-router-dom'

function Profile({ user, likedList, setLikedList }) {
  const [tattoos, setTattoos] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
    fetch("/favorites")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTattoos(data);
      });
  }, []);

  function handleDelete() {
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

  function handleChangeProfilePic() {
    fetch(`/user/${user.image_url}`, {
      method: "PATCH",
      body: JSON.stringify({
        image_url: "",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      })
      .catch((err) => console.error(err));
  }

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
      <form input="text" onChange={handleChangeProfilePic}>
        {" "}
        Change profile pic
      </form>
      <h2 className="favorites-container">Favorite Tattoos</h2>
      {/* <ul>{onTattooLike}</ul> */}
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Delete your Account</h2>
        <button onClick={handleDelete}>Delete</button>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Profile;
