import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Profile from "./Profile";
import "./App.css";
import Login from "./Login/Login";

function App() {
  const [likedList, setLikedList] = useState([]);


  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={user} />;

  return (
    <div className="App">
      <div>
        <div class="rounded mx-auto d-block">
          <img
            src="https://user-images.githubusercontent.com/102488171/178009363-a7e88595-2387-4be9-90c1-9e0290e74fb4.png"
            className="logo"
            alt="logo"
          />
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Login setUser={user} />} />
        <Route
          path="/home"
          element={
            <Home
              user={user}
              likedList={likedList}
              setLikedList={setLikedList}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <NavBar />
              <Profile
                user={user}
                likedList={likedList}
                setLikedList={setLikedList}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
