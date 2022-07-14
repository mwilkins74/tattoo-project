import React, { useState, useEffect } from "react";
import TattooList from "./TattooList";
import NavBar from "./NavBar";


function Home({user, likedList, setLikedList}) {
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
      <NavBar />
      <TattooList
        user={user}
        tattoos={tattoos}
        setTattoos={setTattoos}
        likedList={likedList}
        setLikedList={setLikedList}
      />
    </div>
  );
}

export default Home;
