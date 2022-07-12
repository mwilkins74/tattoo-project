import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

function NavBar({ tattoos, setTattoos }) {
    return (
      <div>
        <div>
          <Link exact to="/Home">
            
            <Home />
            <img
              src="https://user-images.githubusercontent.com/102488171/178009363-a7e88595-2387-4be9-90c1-9e0290e74fb4.png"
              className="App-logo"
              alt="logo"
            />
          </Link>
          <Link exact to="/Home"></Link>
          <Link exact to="/Profile">
            <Profile />
          </Link>
        </div>
      </div>
    );
}

export default NavBar;