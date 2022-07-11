import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

function NavBar({ postTattoos, setPostTattoos }) {
    return (
      <div>
        <div>
          <Link exact to="/">
            <img
              src="https://user-images.githubusercontent.com/102488171/178009363-a7e88595-2387-4be9-90c1-9e0290e74fb4.png"
              className="App-logo"
              alt="logo"
            />
            <a
              className="App-link"
              href="https://user-images.githubusercontent.com/102488171/178009363-a7e88595-2387-4be9-90c1-9e0290e74fb4.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
        </Link>
        <Link exact to="/Home">
            <Home postTattoos={postTattoos} setPostTattoos={setPostTattoos} />
        </Link>
        <Link exact to="/Profile">
            <Profile />     
        </Link>
        </div>
      </div>
    );
}

export default NavBar;