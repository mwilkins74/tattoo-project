import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
// import NavBar from "./NavBar";
import Profile from "./Profile";
import "./App.css";
import Login from "./Login/Login";

function App() {
  // const [tattoos, setTattoos] = useState([]);

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  // if (!user) return <Login setUser={user} />;

  return (
    <div className="App">
      <img
        src="https://user-images.githubusercontent.com/102488171/178009363-a7e88595-2387-4be9-90c1-9e0290e74fb4.png"
        className="logo"
        alt="logo"
      />
      <Routes>
        <Route exact path="/" element={<Login setUser={user} />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
