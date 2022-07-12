import React, {useState, useEffect } from "react";
// import TattooList from "./TattooList";
import Gallery from "./Gallery";
import NavBar from "./NavBar";

function Home() {
  const [tattoos, setTattoos] = useState([]);

  useEffect(() => {
    console.log("run once");
    fetch("/tattoos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTattoos(data)
      })
    
  }, []);

  return (
    <div>
      {/* <TattooList tattoos={tattoos}/> */}
      <NavBar />
      <Gallery />
    </div>
  );
}

export default Home;
