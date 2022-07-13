import React, { useState, useEffect } from "react";
import TattooList from "./TattooList";
// import Gallery from "./Gallery";
import NavBar from "./NavBar";
import DB from "./db.json"
import Profile from "./Profile";


function Home() {
  const [tattoos, setTattoos] = useState([]);

  useEffect(() => {
    // console.log("run once");
    fetch("/tattoos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTattoos(data);
      });
  }, []);


  // useEffect(() => {
  //   fetch("/http://127.0.0.1:3000/tattoos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       setTattoos(data)
  //     })
  // }, []);

  return (
    <div>
      <NavBar />
      <TattooList tattoos={tattoos} />
      {/* <Gallery /> */}
    </div>
  );
}

export default Home;
