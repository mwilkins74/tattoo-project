import React, { useState, useEffect } from "react";
import ProfileImageForm from "./ProfileImageForm";
import TattooListFavorite from "./TattooListFavorite";
import { useNavigate } from "react-router-dom";

function Profile({ user, likedList, setLikedList }) {
  const [tattoos, setTattoos] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [profileImage, setProfileImage] = useState([])
  // const [user, setUser] = useState("");

  let navigate = useNavigate();

  // console.log(user.username)

  // useEffect(() => {
  //   fetch("/profile")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setTattoos(data);
  //     });
  // }, [profileImage]);

  useEffect(() => {
    fetch("/my-favorites")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTattoos(data);
      });
  }, []);

  //DELETE FUNCTION FOR ACCOUNT

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

  function handleForm(e) {
    setShowForm(!showForm);
    console.log(e.target, "hide");
  }

  function newProfileImage(newProfileImage) {
    setProfileImage([...profileImage, newProfileImage]);
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

      <button onClick={handleForm}>
        {showForm ? "Hide Form " : "Change Profile Picture"}
      </button>
      {showForm ? <ProfileImageForm user={user} newProfileImage={newProfileImage} /> : null}

      <h2 className="favorites-container">Favorite Tattoos</h2>
      {/* <ul>{onTattooLike}</ul> */}
      <div>
        <div className="row">
          <div className="column">
            <TattooListFavorite
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
