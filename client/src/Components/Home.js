import React, { useState, useEffect } from "react";
import TattooList from "./TattooList";
import Gallery from "./Gallery";

function Home() {
  const [tattoos, setTattoos] = useState([]);

  useEffect(() => {
    fetch("/tattoos")
      .then((response) => response.json())
      .then((tattoos) => console.log(tattoos));
  }, []);

  console.log("Hi, Im data");

  return (
    <div>
      {/* <TattooList tattoos={tattoos} setTattoos={setTattoos} /> */}
      <Gallery />
    </div>
  );
}

export default Home;
